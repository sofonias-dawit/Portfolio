import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';

const navLinks = [
  { name: 'Home', href: '#home', id: 'home' },
  { name: 'About', href: '#about', id: 'about' },
  { name: 'Skills', href: '#skills', id: 'skills' },
  { name: 'Projects', href: '#projects', id: 'projects' },
  { name: 'Resume', href: '#resume', id: 'resume' },
  { name: 'Contact', href: '#contact', id: 'contact' },
];

const Navigation = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isIndicatorReady, setIsIndicatorReady] = useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState<{ left: number; width: number }>({
    left: 0,
    width: 0,
  });

  const linkRefs = useRef<{ [key: string]: HTMLAnchorElement | null }>({});
  const isClickScrolling = useRef(false);
  const clickScrollTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll when mobile menu is open (mobile only to avoid desktop scrollbar shifts)
  useEffect(() => {
    if (isMenuOpen && window.innerWidth < 768) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isMenuOpen]);

  // Recalculate sliding indicator position when active section changes
  useEffect(() => {
    const updateIndicator = () => {
      const activeEl = linkRefs.current[activeSection];
      if (activeEl) {
        setIndicatorStyle({
          left: activeEl.offsetLeft,
          width: activeEl.offsetWidth,
        });
        setIsIndicatorReady(true);
      }
    };

    updateIndicator();
    // Allow small timeout for layout settling and fonts
    const timer = setTimeout(updateIndicator, 50);
    window.addEventListener('resize', updateIndicator);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateIndicator);
    };
  }, [activeSection, mounted]);

  // Smooth scroll handler with lock to prevent scroll-spy jitter while moving
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // Lock scroll spy during smooth scroll animation
      isClickScrolling.current = true;
      if (clickScrollTimer.current) clearTimeout(clickScrollTimer.current);

      setActiveSection(id);

      const navOffset = 80;
      const elementTop = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: id === 'home' ? 0 : Math.max(0, elementTop - navOffset),
        behavior: 'smooth',
      });

      if (window.history.pushState) {
        window.history.pushState(null, '', href);
      }

      // Release lock after smooth scroll animation settles
      clickScrollTimer.current = setTimeout(() => {
        isClickScrolling.current = false;
      }, 800);
    }
  };

  // Scroll spy to track visible section
  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'resume', 'contact'];
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Do not fight programmatic smooth scrolling
      if (isClickScrolling.current) return;

      // Bottom of page detection for Contact section
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100) {
        setActiveSection('contact');
        return;
      }

      // Viewport trigger line (140px below top of window)
      const triggerY = 140;
      let currentSection = sections[0];

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= triggerY) {
            currentSection = sectionId;
          }
        }
      }

      setActiveSection(currentSection);
    };

    const handleUserScrollInterrupt = () => {
      if (isClickScrolling.current) {
        isClickScrolling.current = false;
        if (clickScrollTimer.current) clearTimeout(clickScrollTimer.current);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('wheel', handleUserScrollInterrupt, { passive: true });
    window.addEventListener('touchmove', handleUserScrollInterrupt, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleUserScrollInterrupt);
      window.removeEventListener('touchmove', handleUserScrollInterrupt);
      if (clickScrollTimer.current) clearTimeout(clickScrollTimer.current);
    };
  }, []);

  const isDark = mounted ? theme === 'dark' : true;

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 animate-nav-entrance transition-[background-color,border-color,box-shadow] duration-200 ${
        isScrolled
          ? 'bg-background/85 backdrop-blur-lg border-b border-border shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-3.5">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home', 'home')}
            className="text-xl sm:text-2xl font-bold tracking-tight text-gradient transition-transform hover:scale-105 select-none"
          >
            SD<span className="text-primary font-black">.</span>
          </a>

          {/* Desktop Segmented Floating Nav with Smooth Sliding Indicator */}
          <div className="hidden md:flex relative items-center p-1 rounded-full bg-secondary/50 border border-border/80 backdrop-blur-md">
            {/* Sliding Active Pill Background */}
            <span
              className={`absolute top-1 bottom-1 rounded-full bg-card border border-primary/20 shadow-sm pointer-events-none ${
                isIndicatorReady ? 'transition-all duration-300 ease-out' : 'opacity-0'
              }`}
              style={{
                left: `${indicatorStyle.left}px`,
                width: `${indicatorStyle.width}px`,
                opacity: isIndicatorReady ? 1 : 0,
              }}
            />

            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  ref={(el) => {
                    linkRefs.current[link.id] = el;
                  }}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href, link.id)}
                  className={`relative z-10 px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-colors duration-200 select-none ${
                    isActive
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-primary'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Theme Toggle & Mobile Trigger */}
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={toggleTheme}
              aria-label="Toggle Dark / Light Theme"
              className="h-9 w-9 border border-border/80 bg-secondary/50 hover:bg-secondary hover:border-primary/40 transition-colors rounded-full"
            >
              {isDark ? <Sun className="h-4 w-4 text-primary" /> : <Moon className="h-4 w-4 text-primary" />}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden hover:bg-secondary text-foreground h-9 w-9"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu with Smooth Height Spring Animation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -8 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -8 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="md:hidden overflow-hidden mt-3 p-4 rounded-xl bg-card border border-border shadow-xl space-y-1"
            >
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-secondary text-foreground font-semibold'
                        : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                    }`}
                    onClick={(e) => {
                      setIsMenuOpen(false);
                      handleNavClick(e, link.href, link.id);
                    }}
                  >
                    <span>{link.name}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-foreground" />}
                  </a>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;

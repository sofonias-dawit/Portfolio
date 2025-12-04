import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-smooth animate-fade-in-down ${isScrolled ? 'bg-background/80 backdrop-blur-lg border-b border-border' : ''}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-2xl font-bold text-gradient animate-scale-in">SD</a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground hover:text-primary transition-smooth animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {link.name}
              </a>
            ))}
            <Button
              variant="outline"
              size="icon"
              onClick={() => setIsDark(!isDark)}
              className="border-2 border-primary/30 hover:bg-primary/10 hover:border-primary transition-smooth animate-scale-in"
              style={{ animationDelay: '0.6s' }}
            >
              {isDark ? <Sun className="h-5 w-5 text-primary" /> : <Moon className="h-5 w-5 text-primary" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setIsDark(!isDark)}
              className="border-2 border-primary/30 hover:bg-primary/10 hover:border-primary transition-smooth"
            >
              {isDark ? <Sun className="h-5 w-5 text-primary" /> : <Moon className="h-5 w-5 text-primary" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="hover:bg-primary/10"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 animate-fade-in">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-2 text-foreground hover:text-primary transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

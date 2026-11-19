import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Send, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/profile.jpg';

const techPills = [
  'React / Next.js',
  'TypeScript',
  'Node.js / Express',
  'Laravel APIs',
  'PostgreSQL',
  'Docker & Vercel',
];

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/sofonias-dawit',
    icon: Github,
    ariaLabel: 'GitHub Profile',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sofoniasdawit/',
    icon: Linkedin,
    ariaLabel: 'LinkedIn Profile',
  },
  {
    name: 'Telegram',
    href: 'https://t.me/SofoniasDawit',
    icon: Send,
    ariaLabel: 'Telegram',
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/251923490535',
    icon: () => (
      <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.41a8.16 8.16 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.44 1.03 2.61c.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.22-.17-.47-.3" />
      </svg>
    ),
    ariaLabel: 'WhatsApp',
  },
  {
    name: 'Email',
    href: 'mailto:sofoniasdawit00@gmail.com',
    icon: Mail,
    ariaLabel: 'Email',
  },
];

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const top = element.getBoundingClientRect().top + window.scrollY - navOffset;
      window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
      if (window.history.pushState) {
        window.history.pushState(null, '', `#${id}`);
      }
    }
  };

  return (
    <section
      id="home"
      className="min-h-[92vh] flex items-center justify-center relative overflow-hidden py-14 sm:py-20 pt-24 sm:pt-36 scroll-mt-24"
    >
      {/* Subtle ambient breathing background glow */}
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
              scale: [1, 1.08, 1],
              opacity: [0.08, 0.14, 0.08],
            }
        }
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none"
      />

      {/* Subtle architectural dot grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Profile Frame - Left Column on Desktop (5 cols) */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.9, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                type: 'spring',
                stiffness: 240,
                damping: 22,
                delay: 0.1,
              }}
              className="lg:col-span-5 flex justify-center order-2 lg:order-1 transform-gpu"
            >
              <motion.div
                whileHover={shouldReduceMotion ? {} : { y: -6, rotateZ: 0.5 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="relative w-52 h-60 sm:w-64 sm:h-72 md:w-80 md:h-96 group cursor-default"
              >
                {/* Hairline tactile card frame */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden border border-border/80 bg-card card-surface shadow-2xl transition-all duration-500">
                  <img
                    src={profileImage}
                    alt="Sofonias Dawit"
                    className="w-full h-full object-cover object-center filter grayscale-[10%] contrast-[105%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-[1.03]"
                  />
                  {/* Subtle inner bevel */}
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none" />
                </div>

                {/* Professional Role Badge with subtle floating spring */}
                <motion.div
                  initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.8, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 0.4, type: 'spring', stiffness: 300, damping: 20 }}
                  className="absolute -bottom-3 -right-3 px-3 py-1.5 rounded-lg bg-card/95 border border-primary/20 backdrop-blur-md font-mono text-[11px] text-foreground/90 shadow-lg flex items-center gap-1.5"
                >
                  <Code2 className="h-3.5 w-3.5 text-primary" />
                  <span>Full-Stack Dev</span>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Editorial Content - Right Column on Desktop (7 cols) */}
            <div className="lg:col-span-7 text-center lg:text-left space-y-6 order-1 lg:order-2 transform-gpu">
              {/* Availability Status Indicator */}
              <motion.div
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/25 font-mono text-xs text-primary"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                <span className="text-primary font-medium">Available for freelance & contract work</span>
                <span className="text-primary/40">/</span>
                <span className="text-foreground/80">Addis Ababa, ET</span>
              </motion.div>

              {/* Primary Headings */}
              <motion.div
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 24,
                  delay: 0.22,
                }}
                className="space-y-2"
              >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                  Sofonias Dawit
                </h1>
                <p className="text-lg sm:text-2xl text-primary font-medium">
                  Full-Stack Developer
                </p>
              </motion.div>

              {/* Authentic Bio */}
              <motion.p
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.32 }}
                className="text-sm sm:text-base text-foreground/80 leading-relaxed max-w-xl mx-auto lg:mx-0"
              >
                Building clean, modern, and responsive web experiences that solve real problems. From idea to launch, I turn concepts into dependable products people enjoy using.
              </motion.p>

              {/* Action Buttons with spring feedback */}
              <motion.div
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 22,
                  delay: 0.42,
                }}
                className="flex flex-col sm:flex-row gap-3 pt-2 justify-center lg:justify-start w-full sm:w-auto"
              >
                <motion.div
                  whileHover={shouldReduceMotion ? {} : { y: -3, scale: 1.02 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  className="w-full sm:w-auto"
                >
                  <Button
                    asChild
                    size="lg"
                    className="gradient-primary text-white hover:opacity-95 shadow-glow font-medium px-6 min-h-[44px] w-full sm:w-auto transition-all"
                  >
                    <a href="#projects" onClick={(e) => scrollTo(e, 'projects')}>
                      View Selected Work
                    </a>
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={shouldReduceMotion ? {} : { y: -3, scale: 1.02 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  className="w-full sm:w-auto"
                >
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border border-border/80 hover:border-primary/60 text-foreground hover:bg-primary/10 hover:text-primary font-medium px-6 min-h-[44px] w-full sm:w-auto transition-all"
                  >
                    <a href="#contact" onClick={(e) => scrollTo(e, 'contact')}>
                      Get in Touch
                    </a>
                  </Button>
                </motion.div>
              </motion.div>

              {/* Tech Stack Specs Monospace Strip with Micro-Interactions */}
              <motion.div
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.52 }}
                className="pt-2 flex flex-wrap gap-2 justify-center lg:justify-start font-mono text-xs text-muted-foreground"
              >
                {techPills.map((tech) => (
                  <motion.span
                    key={tech}
                    whileHover={shouldReduceMotion ? {} : { y: -2, scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 350, damping: 20 }}
                    className="px-2.5 py-1 rounded bg-secondary/40 border border-border/60 hover:border-primary/50 hover:text-primary transition-colors cursor-default select-none"
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>

              {/* Minimalist Social Channels with Spring Bounce */}
              <motion.div
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex items-center gap-2 pt-2 justify-center lg:justify-start"
              >
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.ariaLabel}
                      initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.7 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        delay: 0.6 + index * 0.06,
                        type: 'spring',
                        stiffness: 300,
                        damping: 18,
                      }}
                      whileHover={shouldReduceMotion ? {} : { y: -3, scale: 1.12 }}
                      whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
                      className="p-2.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 border border-transparent hover:border-primary/20 transition-colors"
                    >
                      <Icon className="h-4 w-4" />
                    </motion.a>
                  );
                })}
              </motion.div>
            </div>
          </div>

          {/* Minimalist Scroll Hint */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-16 text-center transform-gpu"
          >
            <a
              href="#about"
              onClick={(e) => scrollTo(e, 'about')}
              className="group inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              <span>Explore</span>
              <motion.span
                animate={
                  shouldReduceMotion
                    ? {}
                    : {
                      y: [0, 4, 0],
                    }
                }
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="inline-flex items-center justify-center text-primary group-hover:text-primary"
              >
                <ArrowDown className="h-3.5 w-3.5" />
              </motion.span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

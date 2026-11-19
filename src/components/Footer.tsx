import { ArrowUp, Github, Linkedin, Mail, Send } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-border/70 relative bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Brand & Tagline */}
            <div className="text-center md:text-left space-y-1">
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-xl font-bold tracking-tight text-gradient inline-block"
              >
                SD<span className="text-primary font-black">.</span>
              </a>
              <p className="text-xs sm:text-sm text-muted-foreground font-mono">
                Sofonias Dawit / Full-Stack Developer
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/sofonias-dawit"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 border border-transparent hover:border-primary/20 transition-colors"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/sofoniasdawit/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 border border-transparent hover:border-primary/20 transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://t.me/SofoniasDawit"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 border border-transparent hover:border-primary/20 transition-colors"
              >
                <Send className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/251923490535"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 border border-transparent hover:border-primary/20 transition-colors"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.41a8.16 8.16 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.44 1.03 2.61c.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.22-.17-.47-.3" />
                </svg>
              </a>
              <a
                href="mailto:sofoniasdawit00@gmail.com"
                aria-label="Email Sofonias"
                className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 border border-transparent hover:border-primary/20 transition-colors"
              >
                <Mail className="h-4 w-4" />
              </a>
              <button
                onClick={scrollToTop}
                aria-label="Back to top"
                className="p-2 rounded-lg bg-primary/10 border border-primary/20 text-primary hover:bg-primary hover:text-white transition-colors ml-2"
              >
                <ArrowUp className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Copyright & Location/Timezone */}
          <div className="mt-8 pt-6 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground gap-3 text-center sm:text-left font-mono">
            <p>© {new Date().getFullYear()} Sofonias Dawit. All rights reserved.</p>
            <p className="flex items-center gap-1.5 text-foreground/80">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Addis Ababa, Ethiopia</span>
              <span className="text-muted-foreground/60">•</span>
              <span className="text-muted-foreground">UTC+3</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

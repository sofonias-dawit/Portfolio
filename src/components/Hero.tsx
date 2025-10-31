import { ArrowDown, Github, Linkedin, Mail, Send, Twitter, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import profileImage from '@/assets/profile.jpg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center gradient-hero relative overflow-hidden py-20 pt-32">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Profile Image Section - Left Side on Desktop */}
            <div className="flex justify-center lg:justify-center order-2 lg:order-1 animate-scale-in">
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[320px] lg:h-[320px]">
                <div className="absolute inset-0 bg-primary/30 rounded-full blur-3xl animate-glow"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary shadow-glow">
                  <img
                    src={profileImage}
                    alt="Sofonias Dawit - Full-Stack Web Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>

            {/* Text Content Section - Right Side on Desktop */}
            <div className="text-center lg:text-left space-y-6 animate-fade-in-up order-1 lg:order-2">
              <div className="inline-block">
                <p className="text-primary text-lg md:text-xl lg:text-2xl font-semibold mb-2 animate-fade-in">
                  👋 Welcome! I'm glad you're here
                </p>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-neutral-900 dark:text-white">
              Sofonias Dawit
            </h1>

              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-primary">
                Full-Stack Web Developer
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-foreground/80 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Building modern, user-friendly, and responsive web experiences that solve real problems and deliver meaningful results. From idea to launch, products are created to engage users and make a lasting impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6">
                <Button asChild size="lg" className="gradient-primary text-white hover:opacity-90 shadow-glow w-full sm:w-auto">
                  <a href="#projects">View My Work</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white w-full sm:w-auto">
                  <a href="#contact">Contact Me</a>
                </Button>
              </div>
              
              {/* Social Media Icons */}
              <TooltipProvider>
                <div className="flex gap-4 justify-center lg:justify-start pt-2">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href="https://github.com/sofonias-dawit"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-neutral-200 text-neutral-800 dark:bg-primary/10 dark:text-white hover:bg-primary hover:text-white transition-smooth group"
                        aria-label="GitHub"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>GitHub</p>
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-neutral-200 text-neutral-800 dark:bg-primary/10 dark:text-white hover:bg-primary hover:text-white transition-smooth group"

                        aria-label="LinkedIn"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>LinkedIn</p>
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href="https://twitter.com/sofoniasdawitt"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-neutral-200 text-neutral-800 dark:bg-primary/10 dark:text-white hover:bg-primary hover:text-white transition-smooth group"

                        aria-label="Twitter"
                      >
                        <Twitter className="h-5 w-5" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Twitter</p>
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href="https://instagram.com/sofonias_dawit"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-neutral-200 text-neutral-800 dark:bg-primary/10 dark:text-white hover:bg-primary hover:text-white transition-smooth group"

                        aria-label="Instagram"
                      >
                        <Instagram className="h-5 w-5" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Instagram</p>
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href="https://t.me/sofoniasdawit"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-neutral-200 text-neutral-800 dark:bg-primary/10 dark:text-white hover:bg-primary hover:text-white transition-smooth group"

                        aria-label="Telegram"
                      >
                        <Send className="h-5 w-5" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Telegram</p>
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href="mailto:sofoniasdawit00@gmail.com"
                        className="p-3 rounded-full bg-neutral-200 text-neutral-800 dark:bg-primary/10 dark:text-white hover:bg-primary hover:text-white transition-smooth group"

                        aria-label="Email"
                      >
                        <Mail className="h-5 w-5" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Email</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </TooltipProvider>
            </div>
          </div>
          
          {/* Scroll Down Indicator */}
          <div className="mt-12 lg:mt-20 text-center animate-bounce">
            <a href="#about" className="inline-flex flex-col items-center text-primary gap-2 hover:text-primary/80 transition-smooth">
              <span className="text-sm font-medium">Scroll Down</span>
              <ArrowDown className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

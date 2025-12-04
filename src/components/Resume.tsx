import { GraduationCap, Briefcase, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Resume = () => {
  return (
    <section id="resume" className="py-16 sm:py-20 md:py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 sm:mb-12 text-gradient">
          Resume
        </h2>
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
          <Card className="p-6 sm:p-8 hover:shadow-glow transition-smooth animate-fade-in border-border/50">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="p-2.5 sm:p-3 rounded-lg bg-primary/10 flex-shrink-0">
                <GraduationCap className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">Education</h3>
                <h4 className="text-lg sm:text-xl font-semibold text-primary mb-1">
                  B.Sc. in Information Technology
                </h4>
                <p className="text-muted-foreground">Arba Minch University, Ethiopia</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 sm:p-8 hover:shadow-glow transition-smooth animate-fade-in border-border/50" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="p-2.5 sm:p-3 rounded-lg bg-primary/10 flex-shrink-0">
                <Briefcase className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">Experience</h3>
                <h4 className="text-lg sm:text-xl font-semibold text-primary mb-1">
                  Web Developer Intern
                </h4>
                <p className="text-muted-foreground">Self-employed</p>
              </div>
            </div>
          </Card>

          <div className="flex flex-col items-center gap-3 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <p className="text-muted-foreground text-center">
              You can review my resume (CV)
            </p>
            <Button 
              size="lg" 
              className="gradient-primary text-white hover:opacity-90 shadow-glow"
              asChild
            >
              <a 
                href="https://drive.google.com/file/d/10n75AyDLOG7E-Wsv63VTbORvAGyWoXK3/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FileText className="h-5 w-5 mr-2" />
                View CV
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;

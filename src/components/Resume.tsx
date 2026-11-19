import { motion, useReducedMotion } from 'framer-motion';
import { GraduationCap, Briefcase, FileText, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Resume = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="resume" className="py-20 sm:py-24 border-t border-border/60 relative scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-10 sm:mb-12">
            <span className="font-mono text-xs font-medium text-primary tracking-widest uppercase block mb-2">
              // 04. Experience & Education
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Career background & training.
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mt-2 max-w-xl">
              Practical client delivery combined with formal education in Information Technology.
            </p>
          </div>

          <div className="space-y-5">
            {/* Experience Card */}
            <motion.div
              whileHover={shouldReduceMotion ? {} : { y: -4 }}
              transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            >
              <Card className="p-5 sm:p-8 rounded-xl border border-border/80 bg-card card-surface hover:border-primary/50 transition-colors duration-200 group shadow-sm hover:shadow-lg">
                <div className="flex flex-col md:flex-row md:items-start gap-5">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-200 w-fit">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-foreground">
                          Freelance Full-Stack Developer
                        </h3>
                        <p className="text-muted-foreground text-sm font-medium">
                          Independent Contractor & Client Delivery
                        </p>
                      </div>
                      <span className="font-mono text-xs px-2.5 py-1 rounded bg-primary/10 border border-primary/20 text-primary w-fit font-medium">
                        2024 — PRESENT
                      </span>
                    </div>

                    <ul className="space-y-2.5 mt-4 text-xs sm:text-sm text-foreground/80">
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>
                          <strong className="text-foreground font-semibold">Habesha Espresso (Coffee E-Commerce):</strong> Built an online storefront with automated payment checkout, inventory tracking, and wholesale export inquiry pipelines.
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>
                          <strong className="text-foreground font-semibold">ASB Platform (Hotel Booking System):</strong> Developed a Laravel REST API and React dashboard for local hospitality businesses, replacing paper ledgers with live reservation tracking.
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>
                          <strong className="text-foreground font-semibold">Frontend & Performance:</strong> Built responsive, accessible client websites using React, Next.js, and TypeScript with fast load times and clean layouts.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Education Card */}
            <motion.div
              whileHover={shouldReduceMotion ? {} : { y: -4 }}
              transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            >
              <Card className="p-5 sm:p-8 rounded-xl border border-border/80 bg-card card-surface hover:border-primary/50 transition-colors duration-200 group shadow-sm hover:shadow-lg">
                <div className="flex flex-col md:flex-row md:items-start gap-5">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-200 w-fit">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-foreground">
                          B.Sc. in Information Technology
                        </h3>
                        <p className="text-muted-foreground text-sm font-medium">
                          Arba Minch University
                        </p>
                      </div>
                      <span className="font-mono text-xs px-2.5 py-1 rounded bg-primary/10 border border-primary/20 text-primary w-fit font-medium">
                        GRADUATED 2026
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed mt-2">
                      Comprehensive coursework covering relational database systems (MySQL), web application development, network protocols, data structures, and software engineering principles.
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Resume Action Bar */}
            <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-xl border border-border/80 bg-secondary/30">
              <div>
                <p className="text-sm font-semibold text-foreground">Need a full resume for hiring or contracting?</p>
                <p className="text-xs text-muted-foreground font-mono mt-0.5">Comprehensive CV with project references</p>
              </div>
              <motion.div
                whileHover={shouldReduceMotion ? {} : { y: -2, scale: 1.02 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                className="w-full sm:w-auto"
              >
                <Button asChild className="gradient-primary text-white hover:opacity-90 shadow-glow font-medium px-5 min-h-[42px] whitespace-nowrap w-full sm:w-auto">
                  <a
                    href="https://drive.google.com/file/d/10n75AyDLOG7E-Wsv63VTbORvAGyWoXK3/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    View CV
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;

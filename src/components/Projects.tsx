import { useState, useEffect, useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ExternalLink, Github, ChevronLeft, ChevronRight, CheckCircle2, ArrowRight, Building2, UserCheck, Layers, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import useEmblaCarousel from 'embla-carousel-react';
import { Project, projects } from '@/data/projectsData';

type FilterType = 'all' | 'client' | 'fullstack' | 'frontend';

const filterTabs: { id: FilterType; label: string }[] = [
  { id: 'all', label: 'All Projects' },
  { id: 'client', label: 'Client Work' },
  { id: 'fullstack', label: 'Full-Stack' },
  { id: 'frontend', label: 'Frontend' },
];

const Projects = () => {
  const shouldReduceMotion = useReducedMotion();
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: false, 
    align: 'start',
    slidesToScroll: 1,
    containScroll: 'trimSnaps'
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const counts = useMemo<Record<FilterType, number>>(() => {
    return {
      all: projects.length,
      client: projects.filter((p) => p.categories && p.categories.length > 0 ? p.categories.includes('client') : p.category === 'client').length,
      fullstack: projects.filter((p) => p.categories && p.categories.length > 0 ? p.categories.includes('fullstack') : p.category === 'fullstack').length,
      frontend: projects.filter((p) => p.categories && p.categories.length > 0 ? p.categories.includes('frontend') : p.category === 'frontend').length,
    };
  }, []);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      if (activeFilter === 'all') return true;
      if (project.categories && project.categories.length > 0) {
        return project.categories.includes(activeFilter);
      }
      return project.category === activeFilter;
    });
  }, [activeFilter]);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.reInit();
    emblaApi.scrollTo(0, true);
    setSelectedIndex(0);

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on('select', onSelect);
    onSelect();

    // Mouse wheel horizontal scroll support
    const rootNode = emblaApi.rootNode();
    let isWheeling = false;
    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > 15) {
        e.preventDefault();
        if (!isWheeling) {
          isWheeling = true;
          if (e.deltaX > 0) emblaApi.scrollNext();
          else emblaApi.scrollPrev();
          setTimeout(() => {
            isWheeling = false;
          }, 250);
        }
      }
    };

    rootNode.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      emblaApi.off('select', onSelect);
      rootNode.removeEventListener('wheel', handleWheel);
    };
  }, [emblaApi, activeFilter, filteredProjects.length]);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <section id="projects" className="py-20 sm:py-24 border-t border-border/60 relative scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header & Segmented Filter */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
            <div>
              <span className="font-mono text-xs font-medium text-primary tracking-widest uppercase block mb-2">
                // 03. Selected Projects
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                Projects I've built.
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground mt-2 max-w-xl">
                A collection of client platforms, full-stack systems, and web applications I've developed.
              </p>
            </div>

            {/* Filter Segmented Control */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-1.5 sm:gap-1 p-1 rounded-lg bg-secondary/50 border border-border/70 w-full sm:w-auto font-mono text-xs">
              {filterTabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => {
                    setActiveFilter(tab.id);
                    emblaApi?.scrollTo(0, true);
                  }}
                  className={`px-3 py-2 sm:py-1.5 rounded-md font-medium text-center transition-all inline-flex items-center justify-center gap-1.5 ${
                    activeFilter === tab.id
                      ? 'bg-primary text-white shadow-sm border border-primary'
                      : 'text-muted-foreground hover:text-primary'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono leading-none transition-colors ${
                      activeFilter === tab.id
                        ? 'bg-white/20 text-white font-semibold'
                        : 'bg-muted/70 text-muted-foreground'
                    }`}
                  >
                    {counts[tab.id]}
                  </span>
                </button>
              ))}
            </div>
          </div>
          
          {/* Carousel Showcase with Left/Right Mouse Drag & Side Arrows */}
          <div className="relative">
            {/* Side Navigation Arrow: Previous (Desktop / Tablet only; mobile uses natural thumb-swipe) */}
            <motion.div
              whileHover={shouldReduceMotion ? {} : { scale: 1.08 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.94 }}
              className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 sm:-translate-x-5 md:-translate-x-6 z-20"
            >
              <Button
                onClick={scrollPrev}
                size="icon"
                variant="outline"
                className="h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-card/90 backdrop-blur-md border border-border/80 hover:border-primary/50 hover:bg-primary/10 hover:text-primary text-foreground transition-all shadow-xl flex items-center justify-center"
                aria-label="Previous Project"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
            </motion.div>

            {/* Side Navigation Arrow: Next (Desktop / Tablet only; mobile uses natural thumb-swipe) */}
            <motion.div
              whileHover={shouldReduceMotion ? {} : { scale: 1.08 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.94 }}
              className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 sm:translate-x-5 md:translate-x-6 z-20"
            >
              <Button
                onClick={scrollNext}
                size="icon"
                variant="outline"
                className="h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-card/90 backdrop-blur-md border border-border/80 hover:border-primary/50 hover:bg-primary/10 hover:text-primary text-foreground transition-all shadow-xl flex items-center justify-center"
                aria-label="Next Project"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </motion.div>

            {/* Carousel Viewport with Grab Cursor */}
            <div className="overflow-hidden cursor-grab active:cursor-grabbing select-none" ref={emblaRef}>
              <div className="flex gap-6">
                {filteredProjects.map((project) => (
                  <div
                    key={project.title}
                    className="flex-[0_0_100%] sm:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-16px)] min-w-0"
                  >
                    <motion.div
                      whileHover={shouldReduceMotion ? {} : { y: -5 }}
                      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                      className="h-full"
                    >
                      <Card className="rounded-xl overflow-hidden border border-border/80 bg-card card-surface hover:border-primary/50 transition-colors duration-300 h-full flex flex-col justify-between group shadow-sm hover:shadow-xl">
                      <div>
                        {/* Project Image & Badges */}
                        <div 
                          className="relative overflow-hidden h-52 cursor-pointer bg-secondary/50"
                          onClick={() => setSelectedProject(project)}
                        >
                          <img
                            src={project.image}
                            alt={project.title}
                            loading="lazy"
                            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-[1.03]"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent opacity-60"></div>

                          {/* Top Badges Overlay */}
                          <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 z-10 pointer-events-none">
                            <span className="px-2.5 py-1 rounded bg-card/90 backdrop-blur-md border border-border/80 font-mono text-[10px] tracking-wider uppercase text-foreground">
                              {project.badge}
                            </span>
                            {project.featured && (
                              <span className="px-2 py-0.5 rounded gradient-primary text-white font-mono text-[10px] font-medium tracking-wide shadow-sm">
                                Featured
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Card Body */}
                        <div className="p-5 sm:p-6 space-y-4">
                          <h3 
                            onClick={() => setSelectedProject(project)}
                            className="text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-snug cursor-pointer"
                          >
                            {project.title}
                          </h3>

                          <div>
                            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed line-clamp-3">
                              {project.description}
                            </p>
                            <button
                              type="button"
                              onClick={() => setSelectedProject(project)}
                              className="text-xs text-primary hover:text-primary/80 font-medium inline-flex items-center gap-1.5 transition-colors mt-2.5 group/btn"
                            >
                              <span>Case study details</span>
                              <ArrowRight className="h-3 w-3 group-hover/btn:translate-x-0.5 transition-transform" />
                            </button>
                          </div>

                          {/* Highlights Preview */}
                          {project.highlights && project.highlights.length > 0 && (
                            <div className="space-y-1.5 pt-2 border-t border-border/60">
                              {project.highlights.slice(0, 2).map((item, idx) => (
                                <div key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                                  <CheckCircle2 className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                                  <span className="truncate">{item}</span>
                                </div>
                              ))}
                            </div>
                          )}

                          {/* Tech Tags */}
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {project.tags.slice(0, 4).map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="px-2 py-0.5 rounded bg-secondary/60 border border-border/60 font-mono text-[11px] text-muted-foreground"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Card Footer Actions */}
                      <div className="p-5 sm:p-6 pt-0">
                        <div className="flex gap-2.5 pt-4 border-t border-border/50">
                          <Button asChild size="sm" className="gradient-primary text-white hover:opacity-90 shadow-glow font-medium flex-1 h-9 text-xs">
                            <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-3.5 w-3.5 mr-1.5" />
                              Live Demo
                            </a>
                          </Button>
                          <Button asChild size="sm" variant="outline" className="border-border/80 hover:border-primary/50 text-foreground hover:text-primary hover:bg-primary/5 flex-1 h-9 text-xs transition-colors">
                            <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                              <Github className="h-3.5 w-3.5 mr-1.5" />
                              Source
                            </a>
                          </Button>
                        </div>
                      </div>
                    </Card>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>

            {/* Centered Dots Indicator */}
            <div className="flex justify-center gap-1.5 mt-8">
              {filteredProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => emblaApi?.scrollTo(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === selectedIndex
                      ? 'w-7 bg-primary shadow-glow'
                      : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/60'
                  }`}
                  aria-label={`Go to project slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Case Study Modal */}
          <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-card border border-border/80 card-surface p-4 sm:p-6 md:p-8 shadow-2xl">
              {selectedProject && (
                <div className="space-y-6">
                  {/* Image Header */}
                  <div className="relative rounded-xl overflow-hidden h-44 sm:h-56 md:h-64 border border-border/70 bg-secondary/50">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 z-10 pointer-events-none">
                      <span className="px-2.5 py-1 rounded bg-card/95 backdrop-blur-md border border-border/80 font-mono text-[10px] tracking-wider uppercase text-foreground">
                        {selectedProject.badge}
                      </span>
                      {selectedProject.featured && (
                        <span className="px-2 py-0.5 rounded gradient-primary text-white font-mono text-[10px] font-medium tracking-wide shadow-sm">
                          Featured
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Dialog Header */}
                  <DialogHeader className="text-left space-y-2">
                    <DialogTitle className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                      {selectedProject.title}
                    </DialogTitle>
                    <DialogDescription className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {selectedProject.description}
                    </DialogDescription>
                  </DialogHeader>

                  {/* Metadata Chips */}
                  {(selectedProject.client || selectedProject.role) && (
                    <div className="flex flex-wrap gap-3 p-3.5 rounded-lg bg-secondary/40 border border-border/60 text-xs font-mono">
                      {selectedProject.client && (
                        <div className="flex items-center gap-1.5 text-foreground">
                          <Building2 className="h-3.5 w-3.5 text-muted-foreground" />
                          <span>Client: {selectedProject.client}</span>
                        </div>
                      )}
                      {selectedProject.role && (
                        <div className="flex items-center gap-1.5 text-foreground">
                          <UserCheck className="h-3.5 w-3.5 text-muted-foreground" />
                          <span>Role: {selectedProject.role}</span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Case Study Narrative */}
                  <div className="space-y-2.5">
                    <h4 className="font-mono text-xs font-medium text-muted-foreground tracking-widest uppercase">
                      Engineering Solution & Scope
                    </h4>
                    <p className="text-sm sm:text-base text-foreground/85 leading-relaxed">
                      {selectedProject.detailedDescription}
                    </p>
                  </div>

                  {/* System Architecture Flow */}
                  {selectedProject.architecture && selectedProject.architecture.length > 0 && (
                    <div className="space-y-2.5">
                      <h4 className="font-mono text-xs font-medium text-muted-foreground tracking-widest uppercase flex items-center gap-1.5">
                        <Layers className="h-3.5 w-3.5 text-muted-foreground" />
                        <span>System Architecture & Dataflow</span>
                      </h4>
                      <div className="flex flex-wrap items-center gap-2 p-3.5 rounded-lg bg-secondary/30 border border-border/70 font-mono text-xs">
                        {selectedProject.architecture.map((step, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <span className="px-2.5 py-1 rounded bg-card border border-border/80 text-foreground">
                              {step}
                            </span>
                            {idx < selectedProject.architecture!.length - 1 && (
                              <ArrowRight className="h-3 w-3 text-muted-foreground flex-shrink-0" />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Metrics Dashboard */}
                  {selectedProject.metrics && selectedProject.metrics.length > 0 && (
                    <div className="space-y-2.5">
                      <h4 className="font-mono text-xs font-medium text-muted-foreground tracking-widest uppercase flex items-center gap-1.5">
                        <Zap className="h-3.5 w-3.5 text-muted-foreground" />
                        <span>Commercial & Performance Metrics</span>
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                        {selectedProject.metrics.map((metric, idx) => (
                          <div key={idx} className="p-3 rounded-lg bg-primary/5 border border-primary/20 text-center font-mono">
                            <p className="text-xs text-primary leading-snug">{metric}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Highlights Deliverables */}
                  {selectedProject.highlights && selectedProject.highlights.length > 0 && (
                    <div className="space-y-2.5">
                      <h4 className="font-mono text-xs font-medium text-muted-foreground tracking-widest uppercase">
                        Key Deliverables
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {selectedProject.highlights.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2 p-2.5 rounded-lg bg-secondary/30 border border-border/50 text-xs text-foreground/85">
                            <CheckCircle2 className="h-3.5 w-3.5 text-primary mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Technologies */}
                  <div className="space-y-2.5">
                    <h4 className="font-mono text-xs font-medium text-muted-foreground tracking-widest uppercase">
                      Technology Stack
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProject.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2.5 py-1 rounded bg-secondary/60 border border-border/60 font-mono text-xs text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border/60">
                    <Button asChild size="lg" className="gradient-primary text-white hover:opacity-90 shadow-glow font-medium flex-1 min-h-[44px]">
                      <a href={selectedProject.demoLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Launch Live Platform
                      </a>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="border border-border/80 hover:border-primary text-foreground hover:text-primary hover:bg-primary/5 flex-1 min-h-[44px] transition-colors">
                      <a href={selectedProject.codeLink} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        View Source Code
                      </a>
                    </Button>
                  </div>
                </div>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default Projects;

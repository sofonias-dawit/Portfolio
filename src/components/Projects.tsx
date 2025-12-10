import { useState, useEffect } from 'react';
import { ExternalLink, Github, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import useEmblaCarousel from 'embla-carousel-react';
import project1Image from '@/assets/project1.jpg';
import project2Image from '@/assets/project2.jpg';
import project3Image from '@/assets/project3.jpg';
import project4Image from '@/assets/project4.jpg';

interface Project {
  title: string;
  description: string;
  detailedDescription: string;
  image: string;
  demoLink: string;
  codeLink: string;
  tags: string[];
  featured: boolean;
}

const imageMap: Record<string, string> = {
  '/src/assets/project1.jpg': project1Image,
  '/src/assets/project2.jpg': project2Image,
  '/src/assets/project3.jpg': project3Image,
  '/src/assets/project4.jpg': project4Image,
};

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: 'start',
    slidesToScroll: 1
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    fetch('/projects.json')
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error loading projects:', error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on('select', onSelect);
    onSelect();

    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  if (loading) {
    return (
      <section id="projects" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-muted-foreground">Loading projects...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-16 sm:py-20 md:py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-14 md:mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 border border-primary/20 mb-3 sm:mb-4">
            <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
            <span className="text-xs sm:text-sm font-semibold text-primary">Portfolio Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-gradient px-2">
            My Projects
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
            Here are some of my recent works that showcase my skills and passion for web development. 
            Each project represents a unique challenge and learning experience.
          </p>
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          {/* Carousel Container */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {projects.map((project, index) => (
                <div
                  key={project.title}
                  className="flex-[0_0_100%] sm:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-16px)] min-w-0"
                >
                  <Card
                    className="overflow-hidden hover:shadow-glow transition-all duration-500 animate-fade-in-up group border hover:border-primary/40 relative bg-card hover:scale-[1.02] h-full"
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    {project.featured && (
                      <div className="absolute top-4 right-4 z-10">
                        <Badge className="gradient-primary text-white border-0">Featured</Badge>
                      </div>
                    )}
                    <div className="relative overflow-hidden h-56">
                      <img
                        src={imageMap[project.image] || project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                    </div>
                    <div className="p-6 space-y-4">
                      <h3 className="text-xl md:text-2xl font-bold group-hover:text-primary transition-smooth">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {project.detailedDescription}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-3 pt-2">
                        <Button asChild size="sm" className="gradient-primary text-white hover:opacity-90 flex-1">
                          <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                        <Button asChild size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white flex-1">
                          <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <Button
            onClick={scrollPrev}
            size="icon"
            variant="outline"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-20 h-12 w-12 rounded-full bg-background/80 backdrop-blur-sm border-2 border-primary/30 hover:bg-primary hover:border-primary transition-all shadow-lg"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            onClick={scrollNext}
            size="icon"
            variant="outline"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-20 h-12 w-12 rounded-full bg-background/80 backdrop-blur-sm border-2 border-primary/30 hover:bg-primary hover:border-primary transition-all shadow-lg"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`h-2 rounded-full transition-all ${
                  index === selectedIndex
                    ? 'w-8 bg-primary'
                    : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

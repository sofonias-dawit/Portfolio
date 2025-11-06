import { ExternalLink, Github, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import project1Image from '@/assets/project1.jpg';
import project2Image from '@/assets/project2.jpg';
import project3Image from '@/assets/project3.jpg';

const Projects = () => {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'My personal portfolio built with React.js, showing my projects and skills in a clean, easy-to-navigate design.',
      detailedDescription: 'A modern, responsive portfolio featuring smooth animations, dark/light theme toggle, and optimized performance. Built with React.js and Tailwind CSS to create an engaging user experience.',
      image: project1Image,
      demoLink: 'https://sofonias.netlify.app/',
      codeLink: 'https://github.com/sofonias-dawit/My-portfolio',
      tags: ['React.js', 'Tailwind CSS', 'TypeScript'],
      featured: true,
    },
    {
      title: 'Patient Management System',
      description: 'A simple hospital management app for handling patient records, doctor schedules, and appointments.',
      detailedDescription: 'A dynamic web app built with PHP to simplify hospital workflows. It helps manage patients, doctors, and appointments, featuring secure logins, role-based access, and user-friendly dashboards for smooth operations.',
      image: project2Image,
      demoLink: 'https://amuhospital.42web.io/',
      codeLink: 'https://github.com/sofonias-dawit/Hospital-Patient-Management-System',
      tags: ['PHP', 'MySQL', 'Hospital Management'],
      featured: false,
    },
    {
      title: 'Green Grid Company Website',
      description: 'A responsive website promoting renewable energy solutions, built with HTML, CSS, and JavaScript.',
      detailedDescription: 'A responsive website built with HTML, CSS, and JavaScript, showcasing clean design and smooth navigation. It promotes renewable energy services with a modern, eco-friendly look.',
      image: project3Image,
      demoLink: 'https://greengridpower.netlify.app/',
      codeLink: 'https://github.com/sofonias-dawit/Green-Grid-Power',
      tags: ['HTML', 'CSS', 'JavaScript'],
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Portfolio Showcase</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            My Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Here are some of my recent works that showcase my skills and passion for web development. 
            Each project represents a unique challenge and learning experience.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="overflow-hidden hover:shadow-glow transition-smooth animate-fade-in group border-2 hover:border-primary/50 relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {project.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="gradient-primary text-white border-0">Featured</Badge>
                </div>
              )}
              <div className="relative overflow-hidden h-56">
                <img
                  src={project.image}
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

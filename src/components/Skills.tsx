import { 
  Code, 
  Database, 
  GitBranch, 
  Layout, 
  Palette, 
  Smartphone, 
  Globe, 
  Braces, 
  FileCode, 
  Boxes 
} from 'lucide-react';
import { Card } from '@/components/ui/card';

const Skills = () => {
  const skills = [
    { name: 'HTML5 & CSS3', icon: Globe, level: 94 },          // Represents web technologies
    { name: 'JavaScript', icon: Braces, level: 85 },            // Braces = programming
    { name: 'React.js', icon: Layout, level: 88 },              // Layout = component-based UI
    { name: 'PHP', icon: FileCode, level: 86 },                 // FileCode = backend scripting
    { name: 'MySQL', icon: Database, level: 75 },               // Database = perfect for SQL
    { name: 'Git & GitHub', icon: GitBranch, level: 82 },       // GitBranch = version control
    { name: 'Responsive Design', icon: Smartphone, level: 92 }, // Smartphone = responsiveness
    { name: 'UI/UX Principles', icon: Palette, level: 80 },     // Palette = design & visuals
    { name: 'WordPress', icon: Boxes, level: 78 },              // Boxes = CMS and modular structure
  ];

  return (
    <section id="skills" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gradient">
          Skills
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card 
              key={skill.name} 
              className="p-6 hover:shadow-glow transition-smooth animate-fade-in border-border/50 hover:border-primary/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <skill.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div 
                  className="gradient-primary h-2 rounded-full transition-smooth"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <p className="text-sm text-muted-foreground mt-2 text-right">{skill.level}%</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

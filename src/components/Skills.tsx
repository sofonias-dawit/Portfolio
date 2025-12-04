import { Code2, Database, GitBranch, Layers, Palette, Smartphone, Globe } from 'lucide-react';
import { useEffect, useState } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    { name: 'HTML5 & CSS3', icon: Globe, level: 94 },
    { name: 'JavaScript', icon: Code2, level: 85 },
    { name: 'React.js', icon: Layers, level: 88 },
    { name: 'PHP', icon: Code2, level: 86 },
    { name: 'MySQL', icon: Database, level: 84 },
    { name: 'Git & GitHub', icon: GitBranch, level: 88 },
    { name: 'Responsive Design', icon: Smartphone, level: 92 },
    { name: 'UI/UX Principles', icon: Palette, level: 84 },
    { name: 'WordPress', icon: Globe, level: 82 },
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 md:py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-14 md:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-primary">
            Skills
          </h2>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="p-5 sm:p-6 rounded-xl bg-card/50 border border-border/30 hover:border-primary/40 transition-all duration-500 animate-fade-in-up hover:shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-4">
                <div className="p-2.5 sm:p-3 rounded-lg bg-primary/10 flex-shrink-0">
                  <skill.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-base sm:text-lg text-foreground">{skill.name}</h3>
              </div>
              <div className="relative">
                <div className="w-full bg-muted/50 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: isVisible ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 0.1 + 0.3}s`
                    }}
                  ></div>
                </div>
                <p className="text-sm text-muted-foreground mt-2 text-right font-medium">{skill.level}%</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

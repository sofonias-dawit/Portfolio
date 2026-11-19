import { motion, useReducedMotion } from 'framer-motion';
import { Code2, Server, CreditCard, Terminal } from 'lucide-react';

interface SkillCategory {
  category: string;
  icon: typeof Code2;
  description: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    category: 'Frontend Development',
    icon: Code2,
    description: 'Building responsive, accessible interfaces with clean components and fast render times.',
    skills: ['React 18', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript (ES6+)', 'HTML5 & CSS3'],
  },
  {
    category: 'Backend & Databases',
    icon: Server,
    description: 'Creating REST APIs, database schemas, and server-side logic designed for reliability.',
    skills: ['Node.js', 'Express.js', 'PostgreSQL', 'Laravel', 'PHP', 'MySQL', 'RESTful APIs', 'Drizzle ORM'],
  },
  {
    category: 'APIs & Integrations',
    icon: CreditCard,
    description: 'Connecting third-party services, handling automated webhooks, and secure user authentication.',
    skills: ['Webhooks & Events', 'REST Endpoints', 'JWT & Auth', 'Third-Party APIs', 'JSON Payloads'],
  },
  {
    category: 'Tooling & Deployment',
    icon: Terminal,
    description: 'Version control with Git, containerization with Docker, and deploying to cloud platforms.',
    skills: ['Docker', 'Vercel', 'Git & GitHub', 'Render'],
  },
];

const Skills = () => {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 240,
        damping: 22,
      },
    },
  };

  return (
    <section id="skills" className="py-20 sm:py-24 border-t border-border/60 relative scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Identifier */}
          <div className="mb-10 sm:mb-12">
            <span className="font-mono text-xs font-medium text-primary tracking-widest uppercase block mb-2">
              // 02. Skills & Stack
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Technologies & tools I work with.
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mt-2 max-w-2xl">
              A curated overview of the programming languages, frameworks, databases, and deployment platforms I use daily.
            </p>
          </div>

          {/* Cards Grid with Framer Stagger */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            {skillCategories.map((group) => (
              <motion.div
                key={group.category}
                variants={itemVariants}
                whileHover={shouldReduceMotion ? {} : { y: -4 }}
                transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                className="p-6 rounded-xl bg-card border border-border/80 card-surface transition-colors duration-300 hover:border-primary/50 flex flex-col justify-between group shadow-sm hover:shadow-lg"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                      <group.icon className="h-4 w-4" />
                    </div>
                    <h3 className="font-semibold text-base sm:text-lg text-foreground">
                      {group.category}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                    {group.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border/60">
                  {group.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={shouldReduceMotion ? {} : { y: -2, scale: 1.04 }}
                      transition={{ type: 'spring', stiffness: 350, damping: 20 }}
                      className="px-2.5 py-1 rounded-md bg-secondary/50 border border-border/70 font-mono text-xs text-foreground/85 cursor-default hover:border-primary/40 hover:text-primary transition-colors select-none"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

import { motion, useReducedMotion } from 'framer-motion';
import { Code2, Server, ShieldCheck } from 'lucide-react';

const pillars = [
  {
    icon: Code2,
    title: 'Frontend Development',
    description: 'Building responsive, accessible interfaces with React, Next.js, and Tailwind CSS that look sharp on any device.',
  },
  {
    icon: Server,
    title: 'Backend & REST APIs',
    description: 'Developing reliable server-side applications, RESTful APIs, and database schemas with Node.js, Express, and Laravel.',
  },
  {
    icon: ShieldCheck,
    title: 'Production Delivery',
    description: 'Integrating payment gateways, handling webhooks, containerizing with Docker, and deploying reliably to the cloud.',
  },
];

const About = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="about" className="py-20 sm:py-24 border-t border-border/60 relative scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Identifier */}
          <div className="mb-10 sm:mb-12">
            <span className="font-mono text-xs font-medium text-primary tracking-widest uppercase block mb-2">
              // 01. About Me
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Passionate about clean code & thoughtful design.
            </h2>
          </div>

          {/* Grid: Story + Pillars */}
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            {/* Narrative - 7 cols */}
            <div className="lg:col-span-7 space-y-5 text-foreground/80 leading-relaxed text-base sm:text-lg">
              <p>
                Hi, I'm <strong className="text-foreground font-semibold">Sofonias</strong>! I'm a full-stack developer based in Addis Ababa, with a degree in <strong className="text-foreground font-semibold">Information Technology from Arba Minch University</strong>. I focus on building smooth, responsive, and easy-to-use web applications that solve real problems.
              </p>
              <p>
                My work spans both frontend and backend — from developing the complete online storefront, wholesale workflows, and payment checkout for <strong className="text-foreground font-semibold">Habesha Espresso</strong>, to building the digital booking platform and dashboard for <strong className="text-foreground font-semibold">ASB Platform</strong>.
              </p>
              <p className="text-muted-foreground text-sm sm:text-base">
                I enjoy working with modern tools like React, Next.js, TypeScript, Node.js, and Laravel. When building software, I value the small details that make a big difference: intuitive user experiences, fast performance, and clean, maintainable architecture.
              </p>

              {/* Quick stats / facts strip */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-border/70 font-mono text-xs">
                <div>
                  <span className="text-muted-foreground block text-[11px]">DEGREE</span>
                  <span className="text-foreground font-medium">B.Sc. in IT</span>
                </div>
                <div>
                  <span className="text-muted-foreground block text-[11px]">LOCATION</span>
                  <span className="text-foreground font-medium">Addis Ababa, ET</span>
                </div>
                <div>
                  <span className="text-muted-foreground block text-[11px]">FOCUS</span>
                  <span className="text-foreground font-medium">Full-Stack Web</span>
                </div>
              </div>
            </div>

            {/* Pillars - 5 cols with Framer spring hover */}
            <div className="lg:col-span-5 space-y-3.5">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={pillar.title}
                    initial={shouldReduceMotion ? {} : { opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{
                      type: 'spring',
                      stiffness: 250,
                      damping: 22,
                      delay: idx * 0.1,
                    }}
                    whileHover={shouldReduceMotion ? {} : { y: -3, x: 2 }}
                    className="p-5 rounded-xl bg-card border border-border/80 card-surface transition-colors duration-200 hover:border-primary/50 shadow-sm hover:shadow-md group cursor-default"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                        <Icon className="h-4 w-4" />
                      </div>
                      <h3 className="font-semibold text-foreground text-sm">{pillar.title}</h3>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {pillar.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

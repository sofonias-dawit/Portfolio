const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 lg:py-28 bg-muted/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-14 md:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gradient">
            About Me
          </h2>
          <div className="h-1 w-20 bg-gradient-primary mx-auto rounded-full"></div>
        </div>
        <div className="max-w-4xl mx-auto space-y-5 sm:space-y-6 animate-fade-in">
          <p className="text-base sm:text-lg md:text-xl text-foreground/90 leading-relaxed text-center px-2">
            Hi, I'm Sofonias! Web Developer with a passion for creating websites that are both functional and attractive. I focus on building smooth, responsive, and easy-to-use web experiences that people enjoy interacting with.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-foreground/90 leading-relaxed text-center px-2">
            I work with HTML, CSS, JavaScript, React.js, PHP, and WordPress, and I'm always exploring new tools and technologies to make my projects smarter and more efficient.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-foreground/90 leading-relaxed text-center px-2">
            When not coding, I enjoy experimenting with design ideas and learning new skills. My goal is to build web experiences that truly make a positive impact for users.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gradient">
          About Me
        </h2>
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <p className="text-lg md:text-xl text-foreground/90 leading-relaxed text-center">
            Hi, I'm Sofonias! Web Developer with a passion for creating websites that are both functional and attractive. I focus on building smooth, responsive, and easy-to-use web experiences that people enjoy interacting with.
          </p>
          <p className="text-lg md:text-xl text-foreground/90 leading-relaxed text-center">
            I work with HTML, CSS, JavaScript, React.js, PHP, and WordPress, and I'm always exploring new tools and technologies to make my projects smarter and more efficient.
          </p>
          <p className="text-lg md:text-xl text-foreground/90 leading-relaxed text-center">
            When not coding, I enjoy experimenting with design ideas and learning new skills. My goal is to build web experiences that truly make a positive impact for users.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

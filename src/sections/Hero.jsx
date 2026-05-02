import Reveal from '../components/Reveal';

const Hero = () => {
  return (
    <section id="hero" className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="container text-center">
        <Reveal>
          <h2 style={{ color: 'var(--text-secondary)', fontWeight: 500, fontSize: '1.5rem', marginBottom: '2rem' }}>
            Hello, I'm
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <h1 className="animate-float" style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', marginBottom: '1.5rem' }}>
            <span className="animate-gradient-text">Euclide Mtisi</span>
          </h1>
        </Reveal>
        <Reveal delay={400}>
          <p style={{ maxWidth: '600px', margin: '0 auto 2.5rem', fontSize: '1.2rem' }}>
            Scaling intelligent systems from local prototypes to automated, production-grade MLOps pipelines.Specialist in Agentic architectures and the MLOps automation required to keep intelligent systems reliable at scale.
          </p>
        </Reveal>
        <Reveal delay={600}>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-outline">Get In Touch</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;

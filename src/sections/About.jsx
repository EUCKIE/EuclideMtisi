import Reveal from '../components/Reveal';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <Reveal>
          <div className="text-center">
            <h2>About Me</h2>
            <p style={{ maxWidth: '800px', margin: '0 auto 3rem' }}>
              <p style={{ maxWidth: '600px', margin: '0 auto 2.5rem', fontSize: '1.2rem' }}>B.S. in Artificial Intelligence and Machine Learning<br /> University of Zimbabwe | 2024 - 2028</p>  </p>
          </div>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <Reveal delay={200}>
            <div className="card" style={{ height: '100%' }}>
              <h3>Vision</h3>
              <p>To leverage data and advanced algorithms to solve complex real-world problems, pushing the boundaries of what automated intelligence can achieve.</p>
            </div>
          </Reveal>
          <Reveal delay={400}>
            <div className="card" style={{ height: '100%' }}>
              <h3>Approach</h3>
              <p>I believe in data-centric development. By ensuring high-quality data pipelines and iterating on robust models, I build AI systems that are accurate, interpretable, and efficient.</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;

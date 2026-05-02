import Reveal from '../components/Reveal';

const Contact = () => {
  return (
    <section id="contact" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <Reveal>
          <div className="card text-center" style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 2rem' }}>
            <h2>Let's Work Together</h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
              I'm currently available for freelance projects and full-time opportunities. If you have a project that needs some creative touch, I'd love to hear about it.
            </p>

            <div style={{ marginTop: '4rem', display: 'flex', justifyContent: 'center', gap: '2rem' }}>
              <a href="https://www.linkedin.com/in/euclide-mtisi/" style={{ color: 'var(--text-secondary)' }}>LinkedIn</a>
              <a href="https://github.com/EUCKIE" style={{ color: 'var(--text-secondary)' }}>GitHub</a>
              <a href="mailto:[EMAIL_ADDRESS]" style={{ color: 'var(--text-secondary)' }}>Email</a>
              <a href="tel:+263 77 993 9099" style={{ color: 'var(--text-secondary)' }}>Call Me</a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;

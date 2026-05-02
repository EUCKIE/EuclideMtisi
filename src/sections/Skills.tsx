import Reveal from '../components/Reveal';

const Skills = () => {
  const skillCategories = [
    { title: 'Machine Learning', skills: ['PyTorch', 'TensorFlow', 'Scikit-Learn', 'Pandas & NumPy', 'Model Deployment'] },
    { title: 'AI Concepts', skills: ['Deep Learning', 'Natural Language Processing (NLP)', 'Computer Vision', 'LLMs & Prompt Engineering'] },
    { title: 'Data Engineering & Tools', skills: ['Python', 'SQL ', 'Docker', 'Git & MLOps'] }
  ];

  return (
    <section id="skills" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <Reveal>
          <h2 className="text-center" style={{ marginBottom: '3rem' }}>Skills</h2>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {skillCategories.map((category, index) => (
            <Reveal key={index} delay={index * 200}>
              <div className="card" style={{ height: '100%' }}>
                <h3 style={{ marginBottom: '1.5rem', color: 'var(--accent-silver)' }}>{category.title}</h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  {category.skills.map((skill, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', color: 'var(--text-secondary)' }}>
                      <span style={{ width: '6px', height: '6px', backgroundColor: 'var(--text-primary)', borderRadius: '50%', marginRight: '10px' }}></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

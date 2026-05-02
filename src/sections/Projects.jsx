import Reveal from '../components/Reveal';

const Projects = () => {
  const projects = [
    {
      title: 'Predictive Analytics Engine',
      description: 'Developed an end-to-end machine learning pipeline that forecasts user behavior using historical data, significantly improving retention strategies.',
      tags: ['Python', 'Scikit-Learn', 'FastAPI'],
      link: '#'
    },
    {
      title: 'NLP Document Classifier',
      description: 'Built a custom transformer-based model to automatically categorize and extract key entities from thousands of unstructured documents.',
      tags: ['PyTorch', 'HuggingFace', 'NLP'],
      link: '#'
    },
    {
      title: 'Computer Vision Defect Detector',
      description: 'Implemented a deep learning vision system for real-time quality control, leveraging object detection algorithms on factory floor feeds.',
      tags: ['OpenCV', 'TensorFlow', 'YOLO'],
      link: '#'
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <Reveal>
          <h2 className="text-center" style={{ marginBottom: '3rem' }}>Selected Works</h2>
        </Reveal>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
          {projects.map((project, index) => (
            <Reveal key={index} delay={index * 200}>
              <div className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div style={{ height: '200px', backgroundColor: 'var(--accent-dark)', borderRadius: '8px', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>
                  [Project Image/Data Viz]
                </div>
                <h3 style={{ fontSize: '1.5rem' }}>{project.title}</h3>
                <p style={{ flexGrow: 1 }}>{project.description}</p>
                
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                  {project.tags.map((tag, i) => (
                    <span key={i} style={{ fontSize: '0.8rem', padding: '0.3rem 0.8rem', borderRadius: '20px', backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid var(--accent-dark)', color: 'var(--text-secondary)' }}>
                      {tag}
                    </span>
                  ))}
                </div>
                
                <a href={project.link} className="btn btn-outline" style={{ alignSelf: 'flex-start', padding: '0.5rem 1.2rem', fontSize: '0.9rem' }}>
                  View Details
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

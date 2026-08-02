import { motion } from 'framer-motion'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: 'Build AI Knowledge Assistant',
      description: 'Built an AI-powered assistant that helps users search, summarize, and retrieve knowledge from structured and unstructured content.',
      details: [
        'Designed a conversational interface for asking questions and receiving context-aware responses.',
        'Integrated document ingestion and retrieval workflows to surface relevant knowledge quickly.',
        'Focused on practical usability, response clarity, and scalable full-stack architecture.'
      ],
      technologies: ['AI', 'React.js', 'Node.js', 'Python', 'Knowledge Retrieval']
    },
    {
      title: 'Memory Lab',
      description: 'Created a research-focused lab experience for exploring memory-system behavior, reliability, and energy-efficiency concepts.',
      details: [
        'Modeled Phase-Change Memory concepts including endurance, wear-leveling, and write optimization.',
        'Built interactive analysis flows for comparing reliability and energy-efficiency outcomes.',
        'Connected research ideas with a clear interface for experimentation and presentation.'
      ],
      technologies: ['Python', 'React.js', 'PCM', 'Data Visualization', 'Research']
    },
    {
      title: 'Arab Bank Portal',
      description: 'Designed and developed secure banking features using React.js, Node.js, and MongoDB.',
      details: [
        'Implemented authentication, fund transfers, and account management with a focus on scalability and security.',
        'Ensured regulatory compliance and adherence to industry security and data protection standards.',
        'Focused on system integration, testing, and scalability for future feature enhancements.'
      ],
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Security', 'Banking']
    },
    {
      title: 'Volana',
      description: 'Designed and developed an NFT-enabled social media platform integrating NFTs using Solidity and Web3 technologies.',
      details: [
        'Enabled users to share visual content and create unique NFT-based digital collections.',
        'Empowered content creators to monetize digital assets through blockchain ownership.',
        'Combined traditional social engagement with Solidity and Web3 integrations.'
      ],
      technologies: ['Solidity', 'Web3', 'JavaScript', 'NFT', 'Blockchain']
    },
    {
      title: 'ARwall',
      description: 'Built an Augmented Reality platform enabling businesses to enhance operations and customer engagement.',
      details: [
        'Developed both a web application and a website for seamless access to AR features.',
        'Integrated virtual images and sounds into real-world environments for immersive experiences.',
        'Created a browser-based experience using Node.js, HTML/CSS, and Next.js.'
      ],
      technologies: ['Node.js', 'HTML/CSS', 'Next.js', 'AR', 'Web Application']
    },
    {
      title: 'Performance Management System',
      description: 'Developed a centralized employee management portal for company resources and tools.',
      details: [
        'Integrated company news, policies, benefits, time tracking, and training modules.',
        'Improved internal communication, productivity, and information accessibility.',
        'Built a responsive web application backed by MongoDB.'
      ],
      technologies: ['React.js', 'Web Application', 'MongoDB', 'Employee Portal']
    },
    {
      title: 'Intelligent Data Analysis System',
      description: 'Designed and implemented a Python-based system for automated data cleaning, analysis, and visualization.',
      details: [
        'Utilized Pandas, NumPy, and Matplotlib to generate interactive reports for decision-making.',
        'Improved data processing efficiency by 40% compared to manual workflows.',
        'Automated repeatable analysis steps to make reporting faster and more reliable.'
      ],
      technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Data Analysis']
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">A showcase of my recent work and projects</p>
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              variants={itemVariants}
              whileHover={{ 
                y: -15, 
                scale: 1.03,
                boxShadow: '0 15px 50px rgba(255, 255, 255, 0.2)',
                borderColor: 'var(--primary-white)'
              }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            >
              <motion.div 
                className="project-number"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: 'spring' }}
              >
                {String(index + 1).padStart(2, '0')}
              </motion.div>
              <div className="project-header">
                <motion.h3 
                  className="project-title"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  <span className="code-symbol">const</span> {project.title}
                </motion.h3>
              </div>
              <p className="project-description">{project.description}</p>
              <ul className="project-details">
                {project.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
              <div className="project-technologies">
                {project.technologies.map((tech, idx) => (
                  <motion.span 
                    key={idx} 
                    className="tech-tag"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + idx * 0.05 }}
                    whileHover={{ 
                      scale: 1.1, 
                      backgroundColor: 'var(--accent-gray)',
                      color: 'var(--primary-white)'
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

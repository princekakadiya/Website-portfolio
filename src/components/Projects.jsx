import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: 'Arab Bank',
      description: 'The Arab Bank Portal project involves creating a secure and user-friendly online platform for banking services, including account management and fund transfers.',
      details: [
        'Emphasizes a robust technology stack, a well-designed interface, and adherence to regulatory standards.',
        'Encompasses testing, integration, and user support, with plans for future enhancements to improve functionality and features.',
        'Ensured regulatory compliance throughout the development process, meeting industry standards for security and data protection.'
      ],
      technologies: ['React', 'Node.js', 'MySQL', 'Security', 'Banking']
    },
    {
      title: 'Volana',
      description: 'Developed a social media platform integrating NFT technology, allowing users to claim ownership of their digital content.',
      details: [
        'Enabled users to share and discover visual content, such as photos and videos, with the added value of creating unique NFT-based collections.',
        'Combined traditional social media features with innovative NFT technology, offering new ways for users to engage and monetize their digital assets.',
        'Empowered users to monetize their digital creations, transforming traditional social media interactions into opportunities for revenue through NFT ownership.'
      ],
      technologies: ['React', 'Solidity', 'Web3', 'NFT', 'Blockchain']
    },
    {
      title: 'ARwall',
      description: 'Developed an Augmented Reality (AR) platform, enabling businesses to enhance operations and customer experiences with virtual content.',
      details: [
        'Created both a web application and website, offering seamless access to AR tools and features.',
        'Specialized in integrating AR technology into the physical world, adding virtual images and sounds to improve user engagement.'
      ],
      technologies: ['AR', 'React', 'WebGL', '3D Graphics']
    },
    {
      title: 'PMS (Performance Management System)',
      description: 'Developed a centralized employee portal, providing easy access to important company information, resources, and tools.',
      details: [
        'Streamlined internal processes by integrating company news, policies, benefits, time tracking, and training resources into a single platform.',
        'Enhanced employee productivity and engagement, offering a user-friendly interface for improved communication and collaboration.',
        'Improved information management by consolidating various resources into a unified and accessible platform.'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Express']
    },
    {
      title: 'Intelligent Data Analysis System',
      description: 'Designed and implemented a Python-based system to automate data cleaning, analysis, and visualization.',
      details: [
        'Integrated Pandas, NumPy, and Matplotlib libraries to create interactive reports for business decision-making.',
        'Improved processing speed by 40% compared to manual analysis methods.'
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
                <div className="project-links">
                  <motion.a
                    href="#"
                    className="project-link"
                    whileHover={{ 
                      scale: 1.3, 
                      rotate: [0, -10, 10, -10, 0],
                      boxShadow: '0 5px 15px rgba(255, 255, 255, 0.3)'
                    }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="View project"
                  >
                    <FaExternalLinkAlt />
                  </motion.a>
                  <motion.a
                    href="#"
                    className="project-link"
                    whileHover={{ 
                      scale: 1.3, 
                      rotate: [0, 10, -10, 10, 0],
                      boxShadow: '0 5px 15px rgba(255, 255, 255, 0.3)'
                    }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="View code"
                  >
                    <FaGithub />
                  </motion.a>
                </div>
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
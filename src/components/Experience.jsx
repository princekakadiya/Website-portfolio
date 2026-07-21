import { motion } from 'framer-motion'
import { FaBriefcase, FaExternalLinkAlt, FaGraduationCap } from 'react-icons/fa'
import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      type: 'work',
      title: 'Research Assistant',
      company: 'NSF REU Site, California State University, Northridge',
      location: 'Los Angeles, California',
      period: 'August 2025 - Present',
      description: [
        'Develop Python and PyTorch models using Deep Q-Networks to optimize Phase-Change Memory durability through intelligent wear-leveling and high-wear address remapping.',
        'Process and analyze large datasets with Pandas and NumPy to identify performance and reliability trends.',
        'Design adaptive algorithms that improve energy efficiency and wear-leveling in memory systems.'
      ]
    },
    {
      type: 'work',
      title: 'Master Mentor, REU Lab',
      company: 'U.S. National Science Foundation (NSF), California State University, Northridge',
      location: 'Los Angeles, California',
      period: 'June 2025 - July 2025',
      description: [
        'Mentored students on the project "Coding-Based Data Storage for Optimizing Durability and Energy Efficiency in PCM."',
        'Guided research focused on improving write energy efficiency, reliability, and endurance of Phase-Change Memory systems.',
        'Supported implementation of memory-mapping algorithms and chip-level DNN designs using flash memory.',
        'Assisted with literature reviews, technical documentation, and research presentations for academic dissemination.'
      ]
    },
    {
      type: 'work',
      title: 'Full Stack Developer',
      company: 'Shaury Infotech',
      location: 'Surat, India',
      period: 'July 2023 - September 2024',
      description: [
        'Developed and maintained scalable React.js and Node.js applications used by 5,000+ users, reducing page load time by 30%.',
        'Diagnosed and resolved production issues, improving application stability and reducing customer-reported defects.',
        'Implemented secure authentication, authorization, and data protection mechanisms to safeguard user data.',
        'Built and maintained CI/CD pipelines to automate testing and deployment and improve development efficiency.'
      ]
    },
    {
      type: 'work',
      title: 'Associate Software Engineer',
      company: 'Inexture Solution LLP',
      location: 'Ahmedabad, India',
      period: 'Jan 2022 - June 2023',
      description: [
        'Developed full-stack web applications using React.js, Node.js, Express.js, and MongoDB, delivering end-to-end features.',
        'Designed and implemented responsive user interfaces optimized for multiple devices and browsers.',
        'Developed and maintained RESTful APIs using Node.js and Express.js for seamless client-server communication.',
        'Collaborated with Agile teams on sprint planning, code reviews, and scheduled feature delivery.'
      ]
    }
  ]

  const education = [
    {
      type: 'education',
      degree: 'Master of Science in Computer Science',
      school: 'California State University, Northridge',
      location: 'Los Angeles, California',
      period: 'January 2025 - Present',
      gpa: 'GPA: 3.92/4'
    },
    {
      type: 'education',
      degree: 'Bachelor of Engineering in Information Technology',
      school: 'Marwadi University',
      location: 'Rajkot, Gujarat, India',
      period: 'Jun 2018 - May 2022',
      gpa: 'GPA: 8.26/10'
    }
  ]

  const publications = [
    {
      title: 'Learn2Mask: A Predictive Encoding Framework for Energy-Efficient PCM Writes',
      venue: 'IEEE AIBThings 2025',
      doi: '10.1109/AIBThings66987.2025.11296234',
      link: 'https://ieeexplore.ieee.org/document/11296234',
      description: 'Co-authored a machine learning-based predictive encoding framework that minimizes PCM write transitions using XGBoost, Logistic Regression, and Neural Networks.'
    },
    {
      title: 'Energy-Efficient Encoding for Multi-Level Cell PCM Using VQ-VAE-Based Masking',
      venue: 'IEEE IEMCON 2025',
      doi: '10.1109/IEMCON67450.2025.11381065',
      link: 'https://ieeexplore.ieee.org/document/11381065',
      description: 'Developed a VQ-VAE-based encoding framework to reduce write energy, write disturbance, and improve reliability in Multi-Level Cell PCM.'
    },
    {
      title: 'Proactive Soft Error Prediction in Multi-Level Cell PCM Using Machine Learning',
      venue: 'IEEE IEMCON 2025',
      doi: '10.1109/IEMCON67450.2025.11381176',
      link: 'https://ieeexplore.ieee.org/document/11381176',
      description: 'Co-authored an XGBoost-based framework for early soft-error detection in MLC PCM, improving reliability, endurance, and energy efficiency.'
    },
    {
      title: 'Complement-Based Self-Healing Memory with Adaptive Thresholds and Reinforcement Learning',
      venue: 'In progress',
      description: 'Researching self-healing memory controllers using adaptive thresholds and Deep Q-Networks for hot/cold address detection and remapping.'
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <motion.div
          className="experience-header"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Experience & Education</h2>
          <p className="section-subtitle">My professional journey and academic background</p>
        </motion.div>

        <div className="experience-content">
          <motion.div
            className="work-experience"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="subsection-title">
              <FaBriefcase className="icon" />
              Work Experience
            </h3>
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="experience-item"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.03, 
                  x: 15,
                  boxShadow: '0 12px 40px rgba(255, 255, 255, 0.15)',
                  borderLeftWidth: '8px'
                }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              >
                <motion.div 
                  className="experience-number"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {String(index + 1).padStart(2, '0')}
                </motion.div>
                <div className="experience-header-item">
                  <motion.h4 
                    className="experience-title"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    <span className="code-keyword">const</span> {exp.title}
                  </motion.h4>
                  <motion.span 
                    className="experience-period"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    {exp.period}
                  </motion.span>
                </div>
                <p className="experience-company">
                  {exp.company} • {exp.location}
                </p>
                <ul className="experience-description">
                  {exp.description.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="education"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="subsection-title">
              <FaGraduationCap className="icon" />
              Education
            </h3>
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="experience-item"
                variants={itemVariants}
                whileHover={{ scale: 1.02, x: 10 }}
              >
                <div className="experience-header-item">
                  <h4 className="experience-title">{edu.degree}</h4>
                  <span className="experience-period">{edu.period}</span>
                </div>
                <p className="experience-company">
                  {edu.school} • {edu.location}
                </p>
                {edu.gpa && <p className="experience-gpa">{edu.gpa}</p>}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="publications"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="subsection-title">
              <FaGraduationCap className="icon" />
              Publications & Research Contributions
            </h3>
            <div className="publications-grid">
              {publications.map((publication, index) => (
                <motion.div
                  key={index}
                  className="experience-item publication-item"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -6 }}
                >
                  <div className="experience-header-item">
                    <h4 className="experience-title">
                      {publication.link ? (
                        <a
                          href={publication.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="publication-link"
                        >
                          {publication.title}
                          <FaExternalLinkAlt className="publication-link-icon" />
                        </a>
                      ) : (
                        publication.title
                      )}
                    </h4>
                    <span className="experience-period">{publication.venue}</span>
                  </div>
                  <p className="experience-company">{publication.description}</p>
                  {publication.doi && (
                    <a
                      href={publication.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="publication-doi"
                    >
                      DOI: {publication.doi}
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Experience

import { motion } from 'framer-motion'
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa'
import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      type: 'work',
      title: 'Master Mentor – Research on Phase Change Memory (PCM)',
      company: 'California State University, Northridge',
      location: 'Los Angeles, California',
      period: 'June, 2025 - Present',
      description: [
        'Mentored students on the project "Coding-Based Data Storage for Optimizing Durability and Energy Efficiency in PCM."',
        'Guided research on improving write energy, reliability, and endurance of PCM systems through hardware/software approaches.',
        'Supported implementation of memory-mapping algorithms and chip-level DNN design using flash memory.',
        'Assisted in literature reviews, technical writing, and presentation preparation.'
      ]
    },
    {
      type: 'work',
      title: 'Full Stack Developer',
      company: 'Shaury Infotech',
      location: 'Surat',
      period: 'July, 2023 - September, 2024',
      description: [
        'Applied strong problem-solving abilities to identify and address technical issues, ensuring the smooth functionality of web applications.',
        'Prioritized and implemented robust security measures to protect user data and ensure the confidentiality of transactions.',
        'Implemented CI/CD pipelines to automate testing and deployment processes, streamlining development workflows.',
        'Demonstrated a commitment to staying updated with the latest industry trends and technologies, ensuring the application of cutting-edge solutions in development projects.'
      ]
    },
    {
      type: 'work',
      title: 'Associate Software Engineer',
      company: 'Inexture Solution LLP',
      location: 'Ahmedabad',
      period: 'Jan, 2022 - June, 2023',
      description: [
        'Specialized in both front-end and back-end development, ensuring comprehensive solutions from user interface design to server-side logic and database management.',
        'Successfully designed, maintained and implemented responsive web interfaces, prioritizing positive user experiences across various devices.',
        'Created and maintained RESTful APIs using Node.js and Express.js, facilitating seamless communication between the front-end and back-end components of Web site.',
        'Played a pivotal role in agile project management, contributing to collaborative efforts, coordinating tasks, and meeting project deadlines for timely deliveries.'
      ]
    }
  ]

  const education = [
    {
      type: 'education',
      degree: 'Master of Science in Computer Science',
      school: 'California State University Northridge',
      location: 'Los Angeles, California',
      period: 'January, 2025 - Present'
    },
    {
      type: 'education',
      degree: 'Bachelors of Engineering in Information Technology',
      school: 'Marwadi University',
      location: 'Rajkot, Gujarat',
      period: 'Jun, 2018 - May, 2022',
      gpa: 'CGPA: 8.26/10'
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
        </div>
      </div>
    </section>
  )
}

export default Experience
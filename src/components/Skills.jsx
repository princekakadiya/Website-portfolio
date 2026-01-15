import { motion } from 'framer-motion'
import './Skills.css'

const Skills = () => {
  const skills = {
    'Frontend': ['JavaScript', 'TypeScript', 'ReactJS', 'HTML', 'CSS', 'Tailwind CSS', 'Material UI', 'Bootstrap', 'jQuery'],
    'Backend': ['NodeJS', 'Python', 'Express.js'],
    'Database': ['MySQL', 'MongoDB', 'PostgreSQL', 'SQLite', 'NoSQL'],
    'Blockchain': ['Solidity', 'Web3'],
    'Data Science': ['Pandas', 'NumPy'],
    'Cloud & Tools': ['AWS', 'Azure', 'Git', 'GitHub', 'GitLab', 'JIRA']
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <motion.div
          className="skills-header"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Skills</h2>
          <p className="section-subtitle">Technologies and tools I work with</p>
        </motion.div>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {Object.entries(skills).map(([category, items], catIndex) => (
            <motion.div
              key={category}
              className="skill-category"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03, 
                y: -8,
                boxShadow: '0 12px 40px rgba(255, 255, 255, 0.15)',
                borderColor: 'var(--primary-white)'
              }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            >
              <motion.h3 
                className="category-title"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1 }}
              >
                <span className="category-bracket">{'{'}</span>
                {category}
                <span className="category-bracket">{'}'}</span>
              </motion.h3>
              <div className="skill-items">
                {items.map((skill, index) => (
                  <motion.span
                    key={index}
                    className="skill-item"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (catIndex * 0.1) + (index * 0.05) }}
                    whileHover={{ 
                      scale: 1.15, 
                      backgroundColor: 'var(--primary-white)', 
                      color: 'var(--primary-black)',
                      rotate: [0, -5, 5, -5, 0],
                      transition: { duration: 0.3 }
                    }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    {skill}
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

export default Skills
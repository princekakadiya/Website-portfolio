import { motion } from 'framer-motion'
import { FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa'
import TypingEffect from './TypingEffect'
import CodeBrackets from './CodeBrackets'
import ReactiveButton from './ReactiveButton'
import './About.css'

const About = () => {
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
    <>
      <section id="home" className="about-section">
        <div className="about-container">
        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="profile-section" variants={itemVariants}>
            <motion.div
              className="profile-image-wrapper"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="profile-image-placeholder profile-video-frame">
                <video
                  className="profile-video"
                  src="/media/profile-video.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  onCanPlay={(event) => {
                    event.currentTarget.play().catch(() => {})
                  }}
                  aria-label="Prince Kakadiya profile video"
                >
                  <span className="profile-initials">PK</span>
                </video>
              </div>
              <div className="profile-image-border"></div>
            </motion.div>
          </motion.div>

          <motion.div className="about-text" variants={itemVariants}>
            <motion.div
              className="hero-intro"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="greeting">Hi, my name is</span>
            </motion.div>
            <motion.h1
              className="name"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              Prince Kakadiya.
            </motion.h1>
            <motion.h2
              className="title-large"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              I build things for the web.
            </motion.h2>
            <motion.h3
              className="title"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <CodeBrackets delay={0.6}>
                <TypingEffect
                  texts={[
                    'Full Stack Developer',
                    'Computer Science MS Student',
                    'Research Assistant',
                    'Machine Learning Developer',
                    'Blockchain Developer',
                    'Problem Solver',
                  ]}
                  speed={80}
                />
              </CodeBrackets>
            </motion.h3>
            <motion.p
              className="description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Full-stack developer and computer science graduate student based in Los Angeles,
              currently pursuing an M.S. in Computer Science at California State University,
              Northridge. I build scalable React and Node.js applications and research machine
              learning methods for improving Phase-Change Memory durability and energy efficiency.
            </motion.p>

            <motion.div
              className="social-links"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.a
                href="https://www.linkedin.com/in/princekakadiya/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="social-link"
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                href="mailto:kakadiyaprince902@gmail.com"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="social-link"
              >
                <FaEnvelope />
              </motion.a>
              <motion.a
                href="https://github.com/princekakadiya"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="social-link"
              >
                <FaGithub />
              </motion.a>
            </motion.div>

            <motion.div
              className="cta-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <ReactiveButton
                variant="primary"
                href="#contact"
                onClick={() => {
                  const element = document.getElementById('contact')
                  if (element) element.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Get In Touch
              </ReactiveButton>
              <ReactiveButton
                variant="secondary"
                href="#projects"
                onClick={() => {
                  const element = document.getElementById('projects')
                  if (element) element.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                View Projects
              </ReactiveButton>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
    <section id="about" className="about-detail-section">
      <div className="about-container">
        <motion.div
          className="about-detail-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me</h2>
          <div className="about-detail-text">
            <p>
              I'm a full-stack developer with a strong foundation in computer science, currently
              pursuing my Master's degree at California State University, Northridge with a 3.92 GPA.
              With professional experience across React.js, Node.js, Express.js, and MongoDB, I build
              production-ready applications that connect polished interfaces with reliable APIs.
            </p>
            <p>
              My recent research focuses on Phase-Change Memory (PCM), including reinforcement
              learning, Deep Q-Networks, predictive encoding, and adaptive wear-leveling strategies
              that improve reliability, endurance, and energy efficiency in memory systems.
            </p>
            <p>
              My skill set spans JavaScript, TypeScript, Python, Java, SQL, Solidity, PyTorch,
              Pandas, NumPy, Tableau, AWS, Azure, Docker, and CI/CD pipelines. My approach emphasizes
              clean code, secure systems, data-driven problem solving, and user-friendly applications
              that solve real-world problems.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
    </>
  )
}

export default About

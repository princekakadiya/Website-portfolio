import { motion } from 'framer-motion'
import { FaLinkedin, FaEnvelope, FaGithub, FaArrowUp } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="footer-container">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="footer-section">
            <h3 className="footer-title">Prince Kakadiya</h3>
            <p className="footer-description">
              Full Stack Developer & Computer Science Graduate Student
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li>
                <a href="#home" onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
                  About
                </a>
              </li>
              <li>
                <a href="#projects" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Connect</h4>
            <div className="footer-social">
              <motion.a
                href="https://www.linkedin.com/in/princekakadiya/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                href="mailto:kakadiyaprince902@gmail.com"
                className="footer-social-link"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaEnvelope />
              </motion.a>
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub />
              </motion.a>
            </div>
          </div>
        </motion.div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Prince Kakadiya. All rights reserved.
          </p>
          <motion.button
            className="scroll-to-top"
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to top"
          >
            <FaArrowUp />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
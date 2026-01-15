import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaLinkedin, FaEnvelope, FaGithub, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Let's connect and discuss opportunities</p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="contact-info-title">Contact Information</h3>
            <p className="contact-info-description">
              Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
            </p>

            <div className="contact-details">
              <motion.a
                href="mailto:kakadiyaprince902@gmail.com"
                className="contact-item"
                whileHover={{ scale: 1.05, x: 10 }}
              >
                <FaEnvelope className="contact-icon" />
                <div>
                  <span className="contact-label">Email</span>
                  <span className="contact-value">kakadiyaprince902@gmail.com</span>
                </div>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/princekakadiya/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
                whileHover={{ scale: 1.05, x: 10 }}
              >
                <FaLinkedin className="contact-icon" />
                <div>
                  <span className="contact-label">LinkedIn</span>
                  <span className="contact-value">linkedin.com/in/princekakadiya</span>
                </div>
              </motion.a>

              <motion.div
                className="contact-item"
                whileHover={{ scale: 1.05, x: 10 }}
              >
                <FaMapMarkerAlt className="contact-icon" />
                <div>
                  <span className="contact-label">Location</span>
                  <span className="contact-value">Los Angeles, California</span>
                </div>
              </motion.div>
            </div>

            <div className="social-links-contact">
              <motion.a
                href="https://www.linkedin.com/in/princekakadiya/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link-contact"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                href="mailto:kakadiyaprince902@gmail.com"
                className="social-link-contact"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaEnvelope />
              </motion.a>
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link-contact"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub />
              </motion.a>
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Your message here..."
              ></textarea>
            </div>

            <motion.button
              type="submit"
              className="submit-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import './Sidebar.css'

const Sidebar = ({ activeSection }) => {
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/princekakadiya/', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:kakadiyaprince902@gmail.com', label: 'Email' },
  ]

  return (
    <aside className="sidebar">
      <div className="sidebar-content">
        <motion.div
          className="sidebar-social"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          {socialLinks.map((link, index) => {
            const Icon = link.icon
            return (
              <motion.a
                key={index}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="sidebar-link"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
                aria-label={link.label}
              >
                <Icon />
              </motion.a>
            )
          })}
        </motion.div>
        <div className="sidebar-line"></div>
      </div>
    </aside>
  )
}

export default Sidebar
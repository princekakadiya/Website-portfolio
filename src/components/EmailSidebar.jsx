import { motion } from 'framer-motion'
import './EmailSidebar.css'

const EmailSidebar = () => {
  return (
    <aside className="email-sidebar">
      <motion.div
        className="email-sidebar-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <motion.a
          href="mailto:kakadiyaprince902@gmail.com"
          className="email-link"
          whileHover={{ y: -5 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          kakadiyaprince902@gmail.com
        </motion.a>
        <div className="email-line"></div>
      </motion.div>
    </aside>
  )
}

export default EmailSidebar
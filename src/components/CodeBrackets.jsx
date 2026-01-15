import { motion } from 'framer-motion'

const CodeBrackets = ({ children, delay = 0 }) => {
  return (
    <motion.span
      className="code-brackets"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5 }}
    >
      <motion.span
        className="bracket"
        initial={{ x: -10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: delay + 0.2, duration: 0.3 }}
      >
        {'{'}
      </motion.span>
      {children}
      <motion.span
        className="bracket"
        initial={{ x: 10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: delay + 0.4, duration: 0.3 }}
      >
        {'}'}
      </motion.span>
    </motion.span>
  )
}

export default CodeBrackets
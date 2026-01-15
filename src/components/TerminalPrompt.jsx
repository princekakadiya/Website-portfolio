import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import './TerminalPrompt.css'

const TerminalPrompt = ({ command, delay = 0, onComplete }) => {
  const [displayText, setDisplayText] = useState('')
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    let charIndex = 0
    const typeInterval = setInterval(() => {
      if (charIndex < command.length) {
        setDisplayText(command.substring(0, charIndex + 1))
        charIndex++
      } else {
        clearInterval(typeInterval)
        if (onComplete) {
          setTimeout(onComplete, 500)
        }
      }
    }, 30)

    return () => clearInterval(typeInterval)
  }, [command, onComplete])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 530)
    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <motion.div
      className="terminal-prompt"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay }}
    >
      <span className="prompt-prefix">root@server:~$</span>
      <span className="command-text">{displayText}</span>
      {showCursor && <span className="cursor">▊</span>}
    </motion.div>
  )
}

export default TerminalPrompt
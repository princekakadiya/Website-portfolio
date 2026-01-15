import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const TypingEffect = ({ texts, speed = 100 }) => {
  const [currentText, setCurrentText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [textIndex, setTextIndex] = useState(0)

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = texts[textIndex]
      
      if (!isDeleting) {
        if (currentIndex < current.length) {
          setCurrentText(current.substring(0, currentIndex + 1))
          setCurrentIndex(currentIndex + 1)
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (currentIndex > 0) {
          setCurrentText(current.substring(0, currentIndex - 1))
          setCurrentIndex(currentIndex - 1)
        } else {
          setIsDeleting(false)
          setTextIndex((textIndex + 1) % texts.length)
        }
      }
    }, isDeleting ? speed / 2 : speed)

    return () => clearTimeout(timeout)
  }, [currentIndex, isDeleting, textIndex, texts, speed])

  return (
    <span className="typing-text">
      {currentText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
        className="typing-cursor"
      >
        |
      </motion.span>
    </span>
  )
}

export default TypingEffect
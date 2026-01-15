import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './BootAnimation.css'

const BootAnimation = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [showCursor, setShowCursor] = useState(true)

  const bootMessages = [
    { text: 'Initializing system...', delay: 500 },
    { text: 'Loading kernel modules...', delay: 800 },
    { text: 'Starting network services...', delay: 600 },
    { text: 'Mounting file systems...', delay: 700 },
    { text: 'Loading user interface...', delay: 600 },
    { text: 'Connecting to database...', delay: 500 },
    { text: 'Starting web server...', delay: 800 },
    { text: 'Loading portfolio data...', delay: 700 },
    { text: 'System ready.', delay: 1000 },
    { text: 'Welcome to Prince Kakadiya\'s Portfolio Server', delay: 1200 },
  ]

  useEffect(() => {
    if (currentStep < bootMessages.length) {
      const message = bootMessages[currentStep]
      let charIndex = 0
      setDisplayText('')

      const typeInterval = setInterval(() => {
        if (charIndex < message.text.length) {
          setDisplayText(message.text.substring(0, charIndex + 1))
          charIndex++
        } else {
          clearInterval(typeInterval)
          setTimeout(() => {
            setCurrentStep(currentStep + 1)
          }, message.delay)
        }
      }, 30)

      return () => clearInterval(typeInterval)
    } else {
      setTimeout(() => {
        if (onComplete) {
          onComplete()
        }
      }, 1500)
    }
  }, [currentStep, onComplete])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 530)
    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <AnimatePresence>
      <motion.div
        className="boot-screen"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="boot-terminal">
          <div className="terminal-header">
            <div className="terminal-controls">
              <span className="control-dot red"></span>
              <span className="control-dot yellow"></span>
              <span className="control-dot green"></span>
            </div>
            <span className="terminal-title">system@princekakadiya.tech</span>
          </div>
          <div className="terminal-body">
            <div className="boot-messages">
              {bootMessages.slice(0, currentStep).map((msg, index) => (
                <div key={index} className="boot-message">
                  <span className="prompt">root@server:~$</span>
                  <span className="message-text">{msg.text}</span>
                  <span className="checkmark">✓</span>
                </div>
              ))}
              {currentStep < bootMessages.length && (
                <div className="boot-message current">
                  <span className="prompt">root@server:~$</span>
                  <span className="message-text">{displayText}</span>
                  {showCursor && <span className="cursor">▊</span>}
                </div>
              )}
            </div>
            {currentStep >= bootMessages.length && (
              <motion.div
                className="boot-complete"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="server-status">
                  <span className="status-indicator"></span>
                  <span>Server Status: ONLINE</span>
                </div>
                <div className="loading-bar">
                  <motion.div
                    className="loading-progress"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default BootAnimation
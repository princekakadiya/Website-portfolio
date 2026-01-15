import { motion } from 'framer-motion'
import { useState } from 'react'
import './ReactiveButton.css'

const ReactiveButton = ({ children, onClick, className = '', variant = 'primary', href, ...props }) => {
  const [clicked, setClicked] = useState(false)

  const handleClick = (e) => {
    setClicked(true)
    setTimeout(() => setClicked(false), 300)
    if (onClick) onClick(e)
  }

  const buttonContent = (
    <>
      <span className="button-prefix">$</span>
      {children}
      {clicked && <span className="response"> ✓</span>}
    </>
  )

  if (href) {
    return (
      <motion.a
        href={href}
        className={`reactive-button ${variant} ${className} ${clicked ? 'clicked' : ''}`}
        onClick={handleClick}
        whileHover={{ 
          scale: 1.05,
          boxShadow: '0 0 20px rgba(255, 255, 255, 0.3)'
        }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        {...props}
      >
        {buttonContent}
      </motion.a>
    )
  }

  return (
    <motion.button
      className={`reactive-button ${variant} ${className} ${clicked ? 'clicked' : ''}`}
      onClick={handleClick}
      whileHover={{ 
        scale: 1.05,
        boxShadow: '0 0 20px rgba(255, 255, 255, 0.3)'
      }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      {...props}
    >
      {buttonContent}
    </motion.button>
  )
}

export default ReactiveButton
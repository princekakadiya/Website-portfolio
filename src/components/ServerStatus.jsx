import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import './ServerStatus.css'

const ServerStatus = () => {
  const [uptime, setUptime] = useState(0)
  const [requests, setRequests] = useState(0)

  useEffect(() => {
    const startTime = Date.now()
    const interval = setInterval(() => {
      setUptime(Math.floor((Date.now() - startTime) / 1000))
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setRequests(prev => prev + Math.floor(Math.random() * 3))
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      className="server-status-bar"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <div className="status-item">
        <span className="status-label">Status:</span>
        <span className="status-value online">ONLINE</span>
        <span className="status-indicator"></span>
      </div>
      <div className="status-item">
        <span className="status-label">Uptime:</span>
        <span className="status-value">{formatUptime(uptime)}</span>
      </div>
      <div className="status-item">
        <span className="status-label">Requests:</span>
        <span className="status-value">{requests}</span>
      </div>
    </motion.div>
  )
}

const formatUptime = (seconds) => {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const secs = seconds % 60
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
}

export default ServerStatus
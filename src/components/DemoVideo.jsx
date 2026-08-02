import { motion } from 'framer-motion'
import './DemoVideo.css'

const DemoVideo = () => {
  return (
    <section id="demo" className="demo-section">
      <div className="demo-container">
        <motion.div
          className="demo-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Demo Video</h2>
          <p className="section-subtitle">
            A quick walkthrough of my work, projects, and development focus.
          </p>
        </motion.div>

        <motion.div
          className="demo-video-shell"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <video
            className="demo-video"
            src="/media/profile-video.mp4"
            controls
            playsInline
            preload="metadata"
            aria-label="Prince Kakadiya portfolio demo video"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default DemoVideo

import { useEffect, useRef } from 'react'

const CodeBackground = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    const particles = []
    const codeSnippets = [
      'const developer = {',
      'function create() {',
      'import React from',
      'export default',
      'async function',
      'const [state, setState]',
      'useEffect(() => {',
      'return <div>',
      'className="',
      'npm install',
      'git commit',
      'console.log(',
    ]

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    class CodeParticle {
      constructor() {
        this.reset()
        this.y = Math.random() * canvas.height
      }

      reset() {
        this.x = Math.random() * canvas.width
        this.y = -20
        this.text = codeSnippets[Math.floor(Math.random() * codeSnippets.length)]
        this.speed = 0.5 + Math.random() * 1.5
        this.opacity = 0.1 + Math.random() * 0.2
        this.fontSize = 12 + Math.random() * 6
      }

      update() {
        this.y += this.speed
        if (this.y > canvas.height + 20) {
          this.reset()
        }
      }

      draw() {
        ctx.save()
        ctx.globalAlpha = this.opacity
        ctx.fillStyle = '#ffffff'
        ctx.font = `${this.fontSize}px 'Courier New', monospace`
        ctx.fillText(this.text, this.x, this.y)
        ctx.restore()
      }
    }

    for (let i = 0; i < 30; i++) {
      particles.push(new CodeParticle())
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(particle => {
        particle.update()
        particle.draw()
      })
      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="code-background"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.3,
      }}
    />
  )
}

export default CodeBackground
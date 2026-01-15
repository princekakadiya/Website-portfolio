import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Error boundary for better debugging
try {
  const rootElement = document.getElementById('root')
  if (!rootElement) {
    throw new Error('Root element not found')
  }

  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
} catch (error) {
  console.error('Failed to render app:', error)
  document.body.innerHTML = `
    <div style="color: white; padding: 20px; font-family: monospace;">
      <h1>Error Loading Portfolio</h1>
      <p>${error.message}</p>
      <p>Please check the browser console for more details.</p>
    </div>
  `
}
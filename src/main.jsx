import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { initPerfDiagnostics } from '../perfDiagnostics.js'
import App from './App.jsx'

initPerfDiagnostics()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

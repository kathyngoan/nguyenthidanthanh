import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import './globals.css'
import './scss/style.scss'
import App from './App.jsx'

import 'aos/dist/aos.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

import React from 'react'
import { createRoot } from 'react-dom/client'
import LandingPage from './components/LandingPage'

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('landing-page-root')
  if (container) {
    const root = createRoot(container)
    root.render(React.createElement(LandingPage))
  }
})
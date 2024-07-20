import React from 'react'
import { createRoot } from 'react-dom/client'
import SignupPage from './components/SignupPage'
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('signup-page-root')
  if (container) {
    try {
      const root = createRoot(container)
      root.render(React.createElement(SignupPage))
    } catch (error) {
      console.error("Error during React rendering:", error);
    }
  } else {
    console.error("Container element not found");
  }
});
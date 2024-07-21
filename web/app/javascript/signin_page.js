import React from 'react'
import { createRoot } from 'react-dom/client'
import SigninPage from './components/SigninPage'
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('signin-page-root')
  if (container) {
    try {
      const root = createRoot(container)
      root.render(React.createElement(SigninPage))
    } catch (error) {
      console.error("Error during React rendering:", error);
    }
  } else {
    console.error("Container element not found");
  }
});
import React from 'react'
import { createRoot } from 'react-dom/client'
import HomePage from './components/HomePage'

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('home-page-root')
  if (container) {
    const userData = JSON.parse(container.dataset.user)
    try {
      const root = createRoot(container)
      root.render(<HomePage user={userData} />)
    } catch (error) {
      console.error("Error during React rendering:", error);
    }
  } else {
    console.error("Container element not found");
  }
});
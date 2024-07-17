console.log("landing_page.tsx is being executed");

import React from 'react'
console.log("React imported:", React);

import { createRoot } from 'react-dom/client'
console.log("createRoot imported:", createRoot);

import LandingPage from './components/LandingPage'
console.log("LandingPage component imported:", LandingPage);

document.addEventListener('DOMContentLoaded', () => {
  console.log("DOM Content Loaded");
  const container = document.getElementById('landing-page-root')
  console.log("Container:", container);
  if (container) {
    console.log("Container found, creating root");
    try {
      const root = createRoot(container)
      console.log("Root created:", root);
      console.log("Rendering LandingPage component");
      root.render(React.createElement(LandingPage))
      console.log("React component rendered");
    } catch (error) {
      console.error("Error during React rendering:", error);
    }
  } else {
    console.error("Container element not found");
  }
});

// ページの読み込みが完了した後に実行
window.addEventListener('load', () => {
  console.log("Window loaded");
  console.log("landing-page-root content:", document.getElementById('landing-page-root')?.innerHTML);
});
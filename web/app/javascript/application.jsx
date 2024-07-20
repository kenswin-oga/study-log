import React from 'react';
import { createRoot } from 'react-dom/client';
import "../assets/stylesheets/application.tailwind.css";

function App() {
  return null;
}

const root = document.getElementById('root');
if (!root) {
  throw new Error('No root element');
}
createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
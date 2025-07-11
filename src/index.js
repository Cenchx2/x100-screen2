import React from 'react';
import { createRoot } from 'react-dom/client'; // Updated import
import './styles/index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

// New React 18 way of rendering
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
import React from 'react';
import ReactDOM from 'react-dom/client';
import { FrontApp } from './FrontApp.jsx';

import './style.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FrontApp />
  </React.StrictMode>,
)

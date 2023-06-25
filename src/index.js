import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { Suspense } from 'react';

import App from '@/App';
import "normalize.css"
import "./assets/css/index.less"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense fallback="loading">
    <HashRouter>
    <App />
    </HashRouter>
    </Suspense>
    
  </React.StrictMode>
);
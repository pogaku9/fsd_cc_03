// libraries
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";

// components
import App from './components/app/index.tsx';

// methods / hooks / styles
import "@amorphic/amorphic-ui-core/dist/css/index.min.css";
import "@amorphic/amorphic-ui-core/dist/css/fonts.min.css";
import './assets/css/combined.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)

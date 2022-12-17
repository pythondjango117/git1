import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <div>
  <BrowserRouter>
       <App/>
  </BrowserRouter>
  </div>
  </>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import App from './AppRoutes/App';
import { BrowserRouter } from 'react-router-dom';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <div className='container bg-light'>
      <BrowserRouter>
       <App/>
       </BrowserRouter>
  </div>
  </>
);
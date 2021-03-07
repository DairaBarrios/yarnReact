import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavBar from './components/Navbar';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <NavBar />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

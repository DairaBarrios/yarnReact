import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavBar from './components/Navbar';
import reportWebVitals from './reportWebVitals';
import ItemListContainer from './components/ItemListContainer';

ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    <ItemListContainer id="titulo" greeting="hola"/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

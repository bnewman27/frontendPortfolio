import React from 'react';
import ReactDOM from 'react-dom/client';
import './input.css';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Game from './components/Game';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Homepage />
    

    
  </React.StrictMode>,
  document.getElementById('root')
);


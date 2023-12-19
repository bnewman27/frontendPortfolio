import React from 'react';
import ReactDOM from 'react-dom/client';
import './input.css';
import Navbar from './components/Navbar';

import Game from './components/Game';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="bg-dmbg ">
    <Navbar />
    <Game />
    </div>

    
  </React.StrictMode>,
  document.getElementById('root')
);


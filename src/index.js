import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './input.css';
import Layout from './components/Layout';
import Home from './components/Home';
import GamePage from './components/GamePage';
import Contact from './components/Contact';
import Error404 from './components/Error404';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faHome, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

library.add(faBars, faHome, faEnvelope, faPhone);



const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="gamepage" element={<GamePage />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
    

    
  </React.StrictMode>,
  document.getElementById('root')
);


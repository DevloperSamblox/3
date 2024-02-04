import './App.css';
import Home from './pages/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import NoHome from './pages/pages';
import ThisIsA404 from './pages/404';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pages" element={<NoHome />} />
      <Route path="*" element={<ThisIsA404 />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;

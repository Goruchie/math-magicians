import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import NavLink from './components/nav';
import Home from './pages/Home';
import Calculator from './pages/Calculator';
import Quote from './pages/Quote';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
      <BrowserRouter>
        <div className="header">
          <NavLink />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </BrowserRouter>
    </>
  </React.StrictMode>,
);

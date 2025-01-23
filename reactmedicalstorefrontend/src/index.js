import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PrivateRouteNew } from './utils/PrivateRouteNew';

import Login from './pages/Login';
import MainComponent from './components/MainComponent';
import CompanyComponent from './pages/CompanyComponent';
import HomeComponent from './pages/HomeComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));

// routes
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      
      {/* Wrap the PrivateRouteNew with Route */}
      <Route
        path="/home"
        element={<PrivateRouteNew activepage="0" element={<HomeComponent />} />}
      />
      <Route
        path="/company"
        element={<PrivateRouteNew activepage="1" element={<CompanyComponent />} />}
      />
    </Routes>
  </Router>
);

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import LoginPage from './pages/LoginPage';
import ProtectedRoute from './pages/ProtectedRoute';
import NavBar from './components/NavBar';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import AboutUs from './pages/AboutUs';
import Persons from './pages/Persons';
import OurProducts from './pages/OurProducts';

const App = () => (
  <div>
    <ToastContainer />
    <BrowserRouter>
      <NavBar />
      {/* Render NavBar inside BrowserRouter */}
      <Routes>
        <Route
          path="/"
          element={(
            <ProtectedRoute>
              <Persons />
            </ProtectedRoute>
          )}
        />
        <Route path="/Persons" element={<Persons />} />
        <Route path="/register" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/our-products" element={<OurProducts />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;

import React, { useState } from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import LoginPage from './pages/LoginPage';
import ProtectedRoute from './pages/ProtectedRoute';
import NavBar from './components/NavBar';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import AboutUs from './pages/AboutUs';
import Persons from './pages/Persons';
import OurProducts from './pages/OurProducts';
import NewsBlog from './pages/NewsBlog';
import ContactUs from './pages/ContactUs';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <ToastContainer />
      <BrowserRouter>
        {isLoggedIn && <NavBar onLogout={handleLogout} />}
        <Routes>
          <Route
            path="/"
            element={(
              <ProtectedRoute>
                <NavBar onLogout={handleLogout} />
                <Persons />
              </ProtectedRoute>
            )}
          />
          <Route
            path="/Persons"
            element={(
              <ProtectedRoute>
                <NavBar onLogout={handleLogout} />
                <Persons />
              </ProtectedRoute>
            )}
          />
          <Route path="/register" element={<LoginPage onLogin={handleLogin} />} />
          <Route
            path="/login"
            element={<LoginPage onLogin={handleLogin} />}
          />
          <Route
            path="/about-us"
            element={(
              <ProtectedRoute>
                <NavBar onLogout={handleLogout} />
                <AboutUs />
              </ProtectedRoute>
            )}
          />
          <Route
            path="/our-products"
            element={(
              <ProtectedRoute>
                <NavBar onLogout={handleLogout} />
                <OurProducts />
              </ProtectedRoute>
            )}
          />
          <Route
            path="/news-blog"
            element={(
              <ProtectedRoute>
                <NavBar onLogout={handleLogout} />
                <NewsBlog />
              </ProtectedRoute>
            )}
          />
          <Route
            path="/contact-us"
            element={(
              <ProtectedRoute>
                <NavBar onLogout={handleLogout} />
                <ContactUs />
              </ProtectedRoute>
            )}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

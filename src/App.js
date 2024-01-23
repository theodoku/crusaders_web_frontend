import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import LoginPage from './pages/LoginPage';
import ProtectedRoute from './pages/ProtectedRoute';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Persons from './pages/Persons';

const App = () => (
  <div>
    <ToastContainer />
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            (
              <ProtectedRoute>
                <Persons />
              </ProtectedRoute>
            )
          }
        />
        <Route path="/Persons" element={<Persons />} />
        <Route path="/register" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from '../pages/Home';
import { SignIn } from '../pages/SignIn';
import { New } from '../pages/New';
import { Details } from '../pages/Details';

export function AppRoutes() {
  const isAuthenticated = !!localStorage.getItem('token'); // Verifica se o token está presente no localStorage

  console.log('Renderizando rota /home:', isAuthenticated);

  return (    
    <Routes>
      <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
      <Route path="/" element={<SignIn />} />
      <Route path="/new" element={isAuthenticated ? <New /> : <Navigate to="/login" />} />
      <Route path="/details" element={isAuthenticated ? <Details /> : <Navigate to="/login" />} />
    </Routes>
  );
}

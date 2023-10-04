// import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { SignIn } from '../pages/SignIn';
import { New } from '../pages/New';
import { Details } from '../pages/Details';

export function AppRoutes() {

  return (
    <Routes>
      <Route path="/home" element={<Home />}/>
      <Route path="/" element={<SignIn />} />
      <Route path="/new" element={<New />}/>
      <Route path="/products/:id" element={<Details />}/>
    </Routes>
  );
}

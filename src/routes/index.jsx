// import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

export function App() {
  // Verifica se há um token no localStorage
  const hasToken = !!localStorage.getItem("token");

  return (
    <BrowserRouter>
      {hasToken ? <AppRoutes /> : <AuthRoutes />}
    </BrowserRouter>
  );
}

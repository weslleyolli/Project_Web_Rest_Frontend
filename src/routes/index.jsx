import React from "react";
import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../hooks/auth";

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

export function Routes() {
  const { user } = useAuth();

  if (user !== null) {
    // O 'user' está definido
    console.log("O usuário está definido:", user);
  } else {
    // O 'user' não está definido
    console.log("O usuário não está definido");
  }

  return <BrowserRouter>{user ? <AppRoutes /> : <AuthRoutes />}</BrowserRouter>;
}

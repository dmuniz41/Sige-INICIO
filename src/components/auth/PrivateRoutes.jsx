import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoutes = ({ IsLogged }) => {
  return IsLogged ? <Outlet /> : <Navigate to="/login" />;
};

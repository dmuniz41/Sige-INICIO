import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const PublicRoutes = ({ IsLogged }) => {
  return IsLogged ? <Navigate to="/dashboard" /> : <Outlet />;
};

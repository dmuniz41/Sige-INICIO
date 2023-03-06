import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoutes = ({ IsLogged }) => {
  return IsLogged ? <Outlet /> : <Navigate to="/login" />;
};

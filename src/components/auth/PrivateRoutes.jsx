import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoutes = () => {
  const { logged } = useSelector((state) => state.auth);
  console.log(
    "🚀 ~ file: PrivateRoutes.js:7 ~ PrivateRoutes ~ logged:",
    logged
  );
  return logged ? <Outlet /> : <Navigate to="/login" />;
};

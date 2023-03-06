import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export const PublicRoutes = () => {
  const { logged } = useSelector((state) => state.auth);
  console.log(
    "🚀 ~ file: PrivateRoutes.js:7 ~ PrivateRoutes ~ logged:",
    logged
  );
  return logged ? <Navigate to="/" /> : <Outlet />;
};

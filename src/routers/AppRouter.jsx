import { Route, Routes } from "react-router-dom";
import LoginScreen from "../components/auth/LoginScreen";
import DashboardScreen from "../components/dashboard/DashboardScreen";
import { PrivateRoutes } from "../components/auth/PrivateRoutes";
import { PublicRoutes } from "../components/auth/PublicRoutes";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<DashboardScreen />} />
        </Route>
        <Route element={<PublicRoutes />}>
          <Route path="/login" element={<LoginScreen />} />
        </Route>
      </Routes>
    </>
  );
};

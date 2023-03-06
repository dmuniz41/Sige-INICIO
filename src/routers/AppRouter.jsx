import { Route, Routes } from "react-router-dom";
import LoginScreen from "../components/auth/LoginScreen";
import DashboardScreen from "../components/dashboard/DashboardScreen";
import { PrivateRoutes } from "../components/auth/PrivateRoutes";
import { PublicRoutes } from "../components/auth/PublicRoutes";
import { useSelector } from "react-redux";

// TODO: Mantener la persisitencia de la autenticación

export const AppRouter = () => {
  const { logged } = useSelector((state) => state.auth);
  return (
    <>
      <Routes>
        <Route element={<PrivateRoutes IsLogged={logged} />}>
          <Route path="/" element={<DashboardScreen />} />
        </Route>
        <Route element={<PublicRoutes IsLogged={logged} />}>
          <Route path="/login" element={<LoginScreen />} />
        </Route>
      </Routes>
    </>
  );
};

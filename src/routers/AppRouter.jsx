import { Route, Routes } from "react-router-dom";
import LoginScreen from "../components/auth/LoginScreen";
import DashboardScreen from "../components/dashboard/DashboardScreen";
import { PrivateRoutes } from "../components/auth/PrivateRoutes";
import { PublicRoutes } from "../components/auth/PublicRoutes";
import { useSelector } from "react-redux";
import { UserScreen } from "../components/user/UserScreen";

// ! TODO: Mantener la persisitencia de la autenticación

export const AppRouter = () => {
  const { logged } = useSelector((state) => state.auth);
  return (
    <>
      <Routes>
        <Route element={<PrivateRoutes IsLogged={logged} />}>
          <Route path="/dashboard" element={<DashboardScreen />}>
            <Route path="user/*" element={<UserScreen />} />
            <Route path="area/*" element={<UserScreen />} />
            <Route path="unitmeasure/*" element={<UserScreen />} />
            <Route path="supplier/*" element={<UserScreen />} />
            <Route path="product_category/*" element={<UserScreen />} />
            <Route path="product_variation/*" element={<UserScreen />} />
            <Route path="hiring_stages/*" element={<UserScreen />} />
            <Route path="hiring/*" element={<UserScreen />} />
            <Route path="client/*" element={<UserScreen />} />
            <Route path="price_rates/*" element={<UserScreen />} />
            <Route path="expense/*" element={<UserScreen />} />
            <Route path="proyect_state/*" element={<UserScreen />} />
            <Route path="activity/*" element={<UserScreen />} />
            <Route path="subcontract/*" element={<UserScreen />} />
            <Route path="roles/*" element={<UserScreen />} />
            <Route path="worker/*" element={<UserScreen />} />
            <Route path="office_expenses/*" element={<UserScreen />} />
            <Route path="warehouse/*" element={<UserScreen />} />
            <Route path="tickets_warehouse/*" element={<UserScreen />} />
            <Route path="projects/*" element={<UserScreen />} />
            <Route path="project_expenses/*" element={<UserScreen />} />
            <Route path="reports/*" element={<UserScreen />} />
          </Route>
        </Route>
        <Route element={<PublicRoutes IsLogged={logged} />}>
          <Route path="/login" element={<LoginScreen />} />
        </Route>
      </Routes>
    </>
  );
};

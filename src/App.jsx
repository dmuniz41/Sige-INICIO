import { Route, Routes } from "react-router-dom";
import LoginScreen from "./components/auth/LoginScreen";
import DashboardScreen from "./components/dashboard/DashboardScreen";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/" element={<DashboardScreen />} />
      </Routes>
    </div>
  );
}

export default App;

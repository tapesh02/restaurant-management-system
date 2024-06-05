import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/pages/dashboard/Dashboard";
import Inventory from "./components/pages/inventory/Inventory";
import Others from "./components/pages/others/Others";
import Revervations from "./components/pages/reservations/Reservations";
import Settings from "./components/pages/settings/Settings";
import Tables from "./components/pages/tables/Tables";
import Revenue from "./components/pages/revenue/Revenue";

const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/tables" element={<Tables />} />
      <Route path="/reservations" element={<Revervations />} />
      <Route path="/revenue" element={<Revenue />} />
      <Route path="/inventory" element={<Inventory />} />
      <Route path="/others" element={<Others />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
};

export default PageRoutes;

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/pages/dashboard/Dashboard';
import Inventory from './components/pages/inventory/Inventory';
import Others from './components/pages/others/Others';
import Revervations from './components/pages/reservations/Reservations';
import Settings from './components/pages/settings/Settings';
import Teams from './components/pages/teams/Teams';
import Revenue from './components/pages/revenue/Revenue';

const PageRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/revervations" element={<Revervations />} />
        <Route path="/revenue" element={<Revenue />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/others" element={<Others />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
};

export default PageRoutes;

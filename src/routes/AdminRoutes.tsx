import { Routes, Route } from "react-router-dom";
import AdminLanding from "../components/pages/Admin/AdminLanding";
import AdminLogin from "../components/pages/Admin/AdminLogin";
import AdminDashboard from "../components/pages/Admin/AdminDashboard";
import AdminLayout from "../components/layouts/AdminLayout";

// NEW PAGES
import ProductPage from "../components/pages/Admin/ProductPage";
import OrdersPage from "../components/pages/Admin/OrdersPage";
import UsersPage from "../components/pages/Admin/UsersPage";
import ReportsPage from "../components/pages/Admin/ReportsPage";
import SettingPage from "../components/pages/Admin/SettingPage";
import ProfilePage from "../components/pages/Admin/ProfilePage";

function AdminRoutes() {
  return (
    <Routes>
      <Route index element={<AdminLanding />} />
      <Route path="login" element={<AdminLogin />} />

      {/* Protected admin pages */}
      <Route element={<AdminLayout />}>
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="product" element={<ProductPage />} />
        <Route path="orders" element={<OrdersPage />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="reports" element={<ReportsPage />} />
        <Route path="settings" element={<SettingPage />} />
        <Route path="profile" element={<ProfilePage />} />
      </Route>
    </Routes>
  );
}

export default AdminRoutes;

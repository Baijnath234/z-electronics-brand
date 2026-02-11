import { Routes, Route } from "react-router-dom";
import AdminLanding from "../pages/Admin/AdminLanding";
import AdminLogin from "../pages/Admin/AdminLogin";
import AdminDashboard from "../pages/Admin/AdminDashboard";
import AdminLayout from "../layouts/AdminLayout";

// NEW PAGES
import ProductPage from "../pages/Admin/ProductPage";
import OrdersPage from "../pages/Admin/OrdersPage";
import UsersPage from "../pages/Admin/UsersPage";
import ReportsPage from "../pages/Admin/ReportsPage";
import SettingPage from "../pages/Admin/SettingPage";
import ProfilePage from "../pages/Admin/ProfilePage";

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

import { Routes, Route } from "react-router-dom";
// import UserLanding from "../components/pages/Users/UserLanding";
import UserLogin from "../components/pages/Users/UserLogin";
import UserDashboard from "../components/pages/Users/UserDashboard";
import UserLayout from "../components/layouts/UserLayout";
import ProductPage from "../components/pages/Users/ProductPage";
import ClientPage from "../components/pages/Users/ClientPage";
import ContactPage from "../components/pages/Users/ContactPage";
import Aboutpage from "../components/pages/Users/Aboutpage";

function UserRoutes() {
  return (
    <Routes>
      {/* <Route path="/" element={<UserLanding />} /> */}
      <Route path="/login" element={<UserLogin />} />

      {/* Protected Area */}
      <Route element={<UserLayout />}>
        <Route path="/" element={<UserDashboard />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/client" element={<ClientPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}

export default UserRoutes;

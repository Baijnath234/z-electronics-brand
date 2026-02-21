import { Routes, Route } from "react-router-dom";
// import UserLanding from "../components/pages/Users/UserLanding";
import UserLogin from "../pages/auth/UserLogin";
import UserDashboard from "../pages/Users/UserDashboard";
import UserLayout from "../components/layouts/UserLayout";
import ProductPage from "../pages/Users/ProductPage";
import ClientPage from "../pages/Users/ClientPage";
import ContactPage from "../pages/Users/ContactPage";
import Aboutpage from "../pages/Users/Aboutpage";
import CategoryProducts from "../pages/Users/CategoryProducts";
import ProductDetails from "../pages/Users/ProductDetails";
import CartPage from "../pages/Users/CartPage";

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
        <Route path="/category/:category" element={<CategoryProducts />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<CartPage />} /> 

      </Route>
    </Routes>
  );
}

export default UserRoutes;

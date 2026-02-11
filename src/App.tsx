import {  Routes, Route } from "react-router-dom";
import AdminRoutes from "./routes/AdminRoutes";
import UserRoutes from "./routes/UserRoutes";

function App() {
  return (
      <Routes>
        {/* User routes */}
        <Route path="/*" element={<UserRoutes />} />

        {/* Admin routes */}
        <Route path="/admin/*" element={<AdminRoutes />} />
      </Routes>
  );
}

export default App;

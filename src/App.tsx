import { Routes, Route } from "react-router-dom";
import AdminRoutes from "./routes/AdminRoutes";
import UserRoutes from "./routes/UserRoutes";
// import ManagerRoutes from "./routes/ManagerRoutes";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <Routes>
      {/* Public + User routes */}
      <Route path="/*" element={<UserRoutes />} />

      {/* Admin routes */}
      <Route
        path="/admin/*"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <AdminRoutes />
          </ProtectedRoute>
        }
      />

      {/* Manager routes */}
      {/* <Route
        path="/manager/*"
        element={
          <ProtectedRoute allowedRoles={["manager"]}>
            <ManagerRoutes />
          </ProtectedRoute>
        }
      /> */}
    </Routes>
  );
}

export default App;

import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Signin } from "./views/auth/Signin";
import { AppLayout } from "./layouts/AppLayout";
import { AuthLayout } from "./views/auth/components/layout/AuthLayout";
import { Signup } from "./views/auth/Signup";
import { DashboardLayout } from "./views/dashboard/components/layout/DashboardLayout";
import { Dashboard } from "./views/dashboard/Dashboard";

export const App = () => {
  return (
    <AppLayout>
      <BrowserRouter>
        <Routes>
          <Route element={<AuthLayout />}>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
          </Route>

          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/:id" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppLayout>
  );
};

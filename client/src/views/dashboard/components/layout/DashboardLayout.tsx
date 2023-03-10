import { Outlet } from "react-router-dom";
import { ProtectedLayout } from "@/views/dashboard/components/layout/ProtectedLayout";

interface DashboardLayoutProps {}

export const DashboardLayout = (props: DashboardLayoutProps) => {
  return (
    <ProtectedLayout>
      <div className="h-screen flex">
        <Outlet />
      </div>
    </ProtectedLayout>
  );
};

import { Outlet } from "react-router-dom";
import { AuthHeader } from "../common/AuthHeader";

interface AuthLayoutProps {}

export const AuthLayout = (props: AuthLayoutProps) => {
  return (
    <div className="h-screen w-full flex flex-col items-center m-auto bg-[#FFFEFC]">
      <AuthHeader />

      <main className="height-container w-full flex items-center justify-center">
        <Outlet />
      </main>
    </div>
  );
};

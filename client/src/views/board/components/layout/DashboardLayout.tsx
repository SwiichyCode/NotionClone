import { useState, useEffect, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import { ProtectedLayout } from "./ProtectedLayout";

interface DashboardLayoutProps {}

export const DashboardLayout = (props: DashboardLayoutProps) => {
  const [user, setUser] = useState<SetStateAction<string | null>>(null);
  let navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") as string);
    setUser(user);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  console.log(user);

  return (
    <ProtectedLayout>
      <button onClick={() => handleLogout()}>Logout</button>
    </ProtectedLayout>
  );
};

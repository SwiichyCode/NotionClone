import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

export const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  let navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      const e = new Error(
        "Vous n'avez pas la permission d'accéder à cette page."
      );
      console.log(e);

      navigate("/login");
    }
  }, []);
  return <div>{children}</div>;
};

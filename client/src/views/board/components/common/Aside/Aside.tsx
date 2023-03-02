import React from "react";
import { useNavigate } from "react-router-dom";
import { userState } from "@/views/board/Dashboard";
import { AsideParams } from "./AsideParams";

interface AsideProps {
  user: userState;
}

export const Aside = ({ user }: AsideProps) => {
  let navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <aside className="flex flex-col w-full max-w-[240px] bg-[#FBFBFA]">
      <AsideParams user={user} />
    </aside>
  );
};

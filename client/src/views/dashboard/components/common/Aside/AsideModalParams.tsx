import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useClickOutside } from "@/views/dashboard/hooks/useClickOutside";

export const AsideModalParams = ({ user, setOpen }: any) => {
  let navigate = useNavigate();
  const ref = useRef<HTMLDivElement>(null);

  useClickOutside(ref, () => setOpen(false));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div
      ref={ref}
      className="absolute flex flex-col top-16 left-4 w-[264px] bg-white drop-shadow-2xl rounded p-3"
    >
      <button onClick={() => handleLogout()}>Déconnexion</button>
    </div>
  );
};

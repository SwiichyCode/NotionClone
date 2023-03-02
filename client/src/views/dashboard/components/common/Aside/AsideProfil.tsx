import { useState } from "react";
import { useUser } from "@/views/dashboard/hooks/useUser";
import { AsideModalParams } from "./AsideModalParams";

interface AsideParamsProps {}

export const AsideProfil = ({}: AsideParamsProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const [user] = useUser();

  return (
    <div className="w-full relative">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center text-sm font-light text-left p-4 hover:bg-gray-100"
      >
        <span className="block text-center font-bold text-white w-[22px] h-[22px] rounded bg-orange-700 mr-2">
          {user?.username.charAt(0).toUpperCase()}
        </span>
        Notion de {user?.username}
      </button>
      {open && <AsideModalParams user={user} setOpen={setOpen} />}
    </div>
  );
};

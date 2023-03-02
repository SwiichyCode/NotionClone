import { useEffect, useState } from "react";
import { userState } from "@/views/dashboard/Dashboard";
import { BoardAdd } from "../Board/BoardAdd";
import { AsideProfil } from "./AsideProfil";
import { AsideTools } from "./AsideTools";
import { BoardList } from "../Board/BoardList";

interface AsideProps {}

export const Aside = (props: AsideProps) => {
  const [user, setUser] = useState<userState>({} as userState);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") as string);
    setUser(user);
  }, []);

  return (
    <aside className="flex flex-col w-full max-w-[240px] border-r-1 border-zinc-400 bg-[#FBFBFA]">
      <AsideProfil user={user} />
      <AsideTools />
      <BoardList />
      <BoardAdd />
    </aside>
  );
};

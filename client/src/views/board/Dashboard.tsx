import { EmojisPicker } from "@/components/common/EmojisPicker/EmojisPicker";
import { useState, useEffect } from "react";
import { Aside } from "./components/common/Aside/Aside";

export interface userState {
  id: string;
  username: string;
  email: string;
  role: ["user" | "moderator" | "admin"];
  accessToken: string;
}

export const Dashboard = () => {
  const [user, setUser] = useState<userState>({} as userState);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") as string);
    setUser(user);
  }, []);

  return (
    <>
      <Aside user={user} />
      <main className="w-full flex items-center justify-center">
        <EmojisPicker />
      </main>
    </>
  );
};

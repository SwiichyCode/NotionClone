import { Aside } from "./components/common/Aside/Aside";
import { Board } from "./components/common/Board/Board";

export interface userState {
  id: string;
  username: string;
  email: string;
  role: ["user" | "moderator" | "admin"];
  accessToken: string;
}

export const Dashboard = () => {
  return (
    <>
      <Aside />
      <Board />
    </>
  );
};

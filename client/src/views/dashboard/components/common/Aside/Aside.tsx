import { BoardAdd } from "../Board/BoardAdd";
import { AsideProfil } from "./AsideProfil";
import { AsideTools } from "./AsideTools";
import { BoardList } from "../Board/BoardList";
import { BoardTrash } from "../Board/BoardTrash";
import { AsideLayout } from "../../layout/AsideLayout";

export const Aside = () => {
  return (
    <AsideLayout>
      <AsideProfil />
      <AsideTools />
      <BoardList />
      <BoardAdd />
      <BoardTrash />
    </AsideLayout>
  );
};

import { BoardAdd } from "../Board/BoardAdd";
import { AsideProfil } from "./AsideProfil";
import { AsideTools } from "./AsideTools";
import { BoardList } from "../Board/BoardList";
import { BoardTrash } from "../Board/BoardTrash";
import { AsideLayout } from "../../layout/AsideLayout";

interface AsideProps {}

export const Aside = (props: AsideProps) => {
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

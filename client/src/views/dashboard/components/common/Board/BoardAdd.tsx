import { useBoardStore } from "@/store/board.store.js";
import { v4 as uuidv4 } from "uuid";
import { IoMdAdd } from "react-icons/io";
import { AsideButton } from "../Aside/AsideButton";

export const BoardAdd = () => {
  const addBoard = useBoardStore((state) => state.create);

  const handleAddBoard = async () => {
    const _id = JSON.parse(localStorage.getItem("user") as string).id;
    const newId = uuidv4();

    const newBoard = {
      id: newId,
      name: "Sans titre",
      emoji: "📄",
      owner: _id,
    };

    await addBoard(newBoard);
  };

  return (
    <AsideButton
      as={"button"}
      onClick={() => handleAddBoard()}
      icon={<IoMdAdd />}
      text="Ajouter une page"
    />
  );
};

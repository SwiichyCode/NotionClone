import { useBoardStore } from "@/store/board.store.js";
import { v4 as uuidv4 } from "uuid";
import { IoMdAdd } from "react-icons/io";

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
    <button
      onClick={() => handleAddBoard()}
      className="flex items-center gap-2 pl-4 cursor-pointer text-xs py-2 hover:bg-gray-100 "
    >
      <div className="flex items-center justify-center w-[22px] h-[22px] text-slate-500">
        <IoMdAdd />
      </div>
      <span className=" font-light text-sm">Ajouter une page</span>
    </button>
  );
};

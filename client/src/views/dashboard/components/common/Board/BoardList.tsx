import { useEffect } from "react";
import { useBoardStore } from "@/store/board.store";
import { Link } from "react-router-dom";

export const BoardList = () => {
  const boards = useBoardStore((state) => state.data);
  const fetchBoards = useBoardStore((state) => state.fetch);

  useEffect(() => {
    fetchBoards();
  }, [fetchBoards]);

  return (
    <ul className="flex flex-col">
      {boards.map((board) => (
        <li
          key={board.id}
          className="pl-4 cursor-pointer text-xs py-2 hover:bg-gray-100 "
        >
          <Link
            to={`/dashboard/${board.id}`}
            className="flex items-center gap-2"
          >
            <div className="flex items-center justify-center w-[22px] h-[22px] text-slate-500">
              {board.emoji}
            </div>
            <span className=" font-light text-sm">{board.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

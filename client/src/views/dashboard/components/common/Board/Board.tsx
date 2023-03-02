import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useBoardStore } from "@/store/board.store";

export const Board = () => {
  const boards = useBoardStore((state) => state.data);
  const fetchBoards = useBoardStore((state) => state.fetch);

  const { id } = useParams<{ id: string }>();
  const board = boards.find((board) => board.id === id);

  useEffect(() => {
    fetchBoards();
  }, [fetchBoards]);

  return (
    <main className="w-full flex items-center justify-center">
      {board?.name}
    </main>
  );
};

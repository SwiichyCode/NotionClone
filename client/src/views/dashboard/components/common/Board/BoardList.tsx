import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useBoardStore } from "@/store/board.store";
import { EmojisPicker } from "@/components/common/EmojisPicker/EmojisPicker";
import { EmojiState } from "@/components/common/EmojisPicker/EmojisPicker";
import { BoardOptions } from "./BoardOptions";

export const BoardList = () => {
  const [openEmojiPicker, setOpenEmojiPicker] = useState(false);
  const [emojiSelected, setEmojiSelected] = useState<EmojiState>(
    {} as EmojiState
  );
  const boards = useBoardStore((state) => state.data);
  const updateBoard = useBoardStore((state) => state.update);
  const deleteBoard = useBoardStore((state) => state.delete);
  const fetchBoards = useBoardStore((state) => state.fetch);
  const [clicked, setClicked] = useState(false);
  const [selectedValue, setSelectedValue] = useState({
    id: "",
    name: "",
  });
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    fetchBoards();
  }, [fetchBoards]);

  const handleOpen = (event: React.MouseEvent<HTMLDivElement>, id: string) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = rect.left + window.scrollX;
    const y = rect.top + window.scrollY;
    setOpenEmojiPicker(!openEmojiPicker);
    setPosition({ x, y });

    setSelectedValue({
      id: id,
      name: boards.find((board) => board.id === id)?.name as string,
    });
  };

  const handleEditEmoji = async () => {
    const newBoard = {
      id: selectedValue.id,
      name: selectedValue.name,
      emoji: emojiSelected.character,
    };

    await updateBoard(newBoard);
  };

  useEffect(() => {
    handleEditEmoji();
  }, [emojiSelected]);

  useEffect(() => {
    const handleClick = () => setClicked(false);
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <ul className="flex flex-col">
      {boards.map((board) => (
        <li
          onContextMenu={(e) => {
            e.preventDefault();
            setClicked(true);
            setPosition({
              x: e.pageX,
              y: e.pageY,
            });
          }}
          key={board.id}
          className="pl-4 cursor-pointer text-xs py-2 hover:bg-gray-100 "
        >
          {clicked && (
            <BoardOptions
              position={position}
              deleteBoard={deleteBoard}
              id={board.id}
            />
          )}
          <Link
            to={`/dashboard/${board.id}`}
            className="flex items-center gap-2"
          >
            <div
              onClick={(event) => {
                handleOpen(event, board.id as string);
              }}
              className="flex items-center justify-center w-[22px] h-[22px] text-slate-500"
            >
              {board.emoji}
            </div>
            <span className=" font-light text-sm">{board.name}</span>
          </Link>
        </li>
      ))}

      <EmojisPicker
        openEmojiPicker={openEmojiPicker}
        setOpenEmojiPicker={setOpenEmojiPicker}
        emojiSelected={emojiSelected}
        setEmojiSelected={setEmojiSelected}
        position={position}
        handleEditEmoji={handleEditEmoji}
      />
    </ul>
  );
};

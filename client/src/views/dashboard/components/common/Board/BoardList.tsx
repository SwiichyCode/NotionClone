import { useEffect, useState } from "react";
import { useBoardStore } from "@/store/board.store";
import { EmojisPicker } from "@/components/common/EmojisPicker/EmojisPicker";
import { BoardTitle } from "./BoardTitle";
import { BoardEmoji } from "./BoardEmoji";
import { BoardOptions } from "./BoardOptions";
import { BoardLink } from "./BoardLink";
import type { EmojiState } from "@/components/common/EmojisPicker/EmojisPicker";
import { URL_CONSTANT } from "@/constants/url.constant";

export const BoardList = () => {
  const [openEmojiPicker, setOpenEmojiPicker] = useState(false);
  const [emojiSelected, setEmojiSelected] = useState<EmojiState>(
    {} as EmojiState
  );
  const boards = useBoardStore((state) => state.data);
  const updateBoard = useBoardStore((state) => state.update);
  const deleteBoard = useBoardStore((state) => state.delete);
  const fetchBoards = useBoardStore((state) => state.fetch);
  const [openOptions, setOpenOptions] = useState(false);
  const [openEditDocumentTitle, setOpenEditDocumentTitle] = useState(false);
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

  const handleEditDocumentName = async () => {
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
    const handleClick = () => setOpenOptions(false);
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
            setOpenOptions(true);
            setPosition({
              x: e.pageX,
              y: e.pageY,
            });
          }}
          key={board.id}
          className="pl-4 cursor-pointer text-xs py-2 hover:bg-gray-100 "
        >
          <BoardOptions
            id={board.id}
            openOptions={openOptions}
            position={position}
            deleteBoard={deleteBoard}
            setOpenDocumentTitle={setOpenEditDocumentTitle}
          />

          <BoardLink href={`${URL_CONSTANT.DASHBOARD}/${board.id}`}>
            <BoardEmoji
              handleOpen={handleOpen}
              id={board.id as string}
              emoji={board.emoji}
            />
            <BoardTitle
              id={board.id as string}
              name={board.name}
              openEditDocumentTitle={openEditDocumentTitle}
              setSelectedValue={setSelectedValue}
              setOpenEditDocumentTitle={setOpenEditDocumentTitle}
              handleEditDocumentName={handleEditDocumentName}
            />
          </BoardLink>
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

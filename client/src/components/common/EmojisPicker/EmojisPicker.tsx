import { useState, useCallback, useRef } from "react";
import { useDebounce } from "react-use";
import { useClickOutside } from "@/views/dashboard/hooks/useClickOutside";
import { EmojisList } from "./EmojisList";
import { EmojisSearchBar } from "./EmojisSearchBar";
import { Spinner } from "../Spinner";
import api from "@/api/api";

export type EmojiState = {
  slug: string;
  character: string;
  group: string;
  subGroup: string;
  unicodeName: string;
  codePoint: string;
};

type Props = {
  openEmojiPicker: boolean;
  setOpenEmojiPicker: (value: boolean) => void;
  emojiSelected: EmojiState;
  setEmojiSelected: (value: EmojiState) => void;
  position: {
    x: number;
    y: number;
  };
  handleEditEmoji: any;
};

export const EmojisPicker = ({
  openEmojiPicker,
  setOpenEmojiPicker,
  emojiSelected,
  setEmojiSelected,
  position,
}: Props) => {
  const [emojis, setEmojis] = useState<EmojiState[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [filteredEmojis, setFilteredEmojis] = useState<EmojiState[]>([]);

  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, () => setOpenEmojiPicker(false));

  const handleUrl = useCallback(() => {
    if (filteredEmojis.length > 0) {
      return `https://emoji-api.com/emojis?search=${filteredEmojis}&access_key=14d501d0cc77d1a6b93cde1b2e6f662ef73650c4`;
    } else {
      return "https://emoji-api.com/emojis?access_key=14d501d0cc77d1a6b93cde1b2e6f662ef73650c4";
    }
  }, [filteredEmojis]);

  useDebounce(
    () => {
      setLoading(true);
      api.get(handleUrl()).then((res: any) => {
        setLoading(false);
        if (res.data.length === 0) return alert("No emojis found");
        setEmojis(res.data);
      });
    },
    500,
    [filteredEmojis]
  );

  return (
    <>
      {openEmojiPicker && (
        <div
          ref={ref}
          className={`absolute w-[408px] h-[356px] flex flex-col bg-white rounded-md drop-shadow-2xl`}
          style={{
            left: position.x,
            top: position.y + 32,
          }}
        >
          <div className="flex justify-between items-center px-4 my-4">
            <EmojisSearchBar setFilteredEmojis={setFilteredEmojis as any} />
            <span>{emojiSelected.character}</span>
            <button
              className="text-sm opacity-75"
              onClick={() => setOpenEmojiPicker(!openEmojiPicker)}
            >
              Supprimer
            </button>
          </div>

          {loading ? (
            <div className="flex items-center justify-center h-full">
              <Spinner show={loading} />
            </div>
          ) : (
            <EmojisList emojis={emojis} setEmojiSelected={setEmojiSelected} />
          )}
        </div>
      )}
    </>
  );
};

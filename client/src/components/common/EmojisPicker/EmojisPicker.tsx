import { useState, useCallback } from "react";
import { useDebounce } from "react-use";
import { EmojisList } from "./EmojisList";
import { EmojisSearchBar } from "./EmojisSearchBar";
import { Spinner } from "../Spinner";
import api from "@/api/api";

export interface EmojiState {
  slug: string;
  character: string;
  group: string;
  subGroup: string;
  unicodeName: string;
  codePoint: string;
}

export const EmojisPicker = () => {
  const [open, setOpen] = useState<boolean>(true);
  const [emojis, setEmojis] = useState<EmojiState[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [filteredEmojis, setFilteredEmojis] = useState<EmojiState[]>([]);
  const [emojiSelected, setEmojiSelected] = useState<EmojiState>(
    {} as EmojiState
  );

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
      {open && (
        <div className="w-full max-w-[408px] h-[356px] flex flex-col bg-white rounded-md drop-shadow-2xl">
          <div className="flex justify-between items-center px-4 my-4">
            <EmojisSearchBar setFilteredEmojis={setFilteredEmojis as any} />
            <span>{emojiSelected.character}</span>
            <button className="text-sm" onClick={() => setOpen(!open)}>
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

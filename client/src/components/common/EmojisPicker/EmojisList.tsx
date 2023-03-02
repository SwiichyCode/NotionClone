import { EmojiState } from "./EmojisPicker";

interface EmojisListProps {
  emojis: EmojiState[];
  setEmojiSelected: (emoji: EmojiState) => void;
}

export const EmojisList = ({ emojis, setEmojiSelected }: EmojisListProps) => {
  const handleSelectEmoji = (emoji: EmojiState) => {
    setEmojiSelected(emoji);
  };

  return (
    <div className="h-full overflow-scroll">
      <ul className="flex flex-wrap justify-center">
        {emojis.map(({ character }, index) => {
          return (
            <li
              key={index}
              className="flex items-center justify-center w-8 h-8"
              onClick={() => handleSelectEmoji(emojis[index])}
            >
              <span className="text-2xl cursor-pointer">{character}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

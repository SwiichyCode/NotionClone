interface Props {
  id: string;
  handleOpen: (event: React.MouseEvent<HTMLDivElement>, id: string) => void;
  emoji: string | undefined;
}

export const BoardEmoji = ({ handleOpen, id, emoji }: Props) => {
  return (
    <div
      onClick={(e) => {
        handleOpen(e, id);
      }}
      className="flex items-center justify-center w-[22px] h-[22px] text-slate-500"
    >
      {emoji}
    </div>
  );
};

import { CiTrash } from "react-icons/ci";
import { TbEdit } from "react-icons/tb";

interface ButtonOptionProps {
  children: React.ReactNode;
  onClick: () => void;
}

const ButtonOption = ({ children, onClick }: ButtonOptionProps) => {
  return (
    <button
      className="w-full flex items-center gap-2 font-light text-sm  hover:bg-gray-100 rounded px-2"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

type Props = {
  id: string | undefined;
  openOptions: boolean;
  position: {
    x: number;
    y: number;
  };
  deleteBoard: (id: string) => void;
  setOpenDocumentTitle: (open: boolean) => void;
};

export const BoardOptions = ({
  id,
  openOptions,
  position,
  deleteBoard,
  setOpenDocumentTitle,
}: Props) => {
  if (!openOptions) return null;

  return (
    <div
      className="w-64 absolute bg-white shadow-lg rounded-md p-2 space-y-2"
      style={{
        top: position.y,
        left: position.x,
      }}
    >
      <ButtonOption onClick={() => deleteBoard(id as string)}>
        <CiTrash size={18} /> Delete
      </ButtonOption>

      <ButtonOption onClick={() => setOpenDocumentTitle(true)}>
        <TbEdit size={18} /> Edit
      </ButtonOption>
    </div>
  );
};

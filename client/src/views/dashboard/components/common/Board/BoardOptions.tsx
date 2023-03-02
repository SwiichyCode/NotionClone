interface BoardOptionsProps {
  position: {
    x: number;
    y: number;
  };
  deleteBoard: (id: string) => void;
  id: string | undefined;
}

export const BoardOptions = ({
  position,
  deleteBoard,
  id,
}: BoardOptionsProps) => {
  return (
    <div
      className="absolute bg-white shadow-lg rounded-md p-2"
      style={{
        top: position.y,
        left: position.x,
      }}
    >
      <button onClick={() => deleteBoard(id as string)}>delete</button>
    </div>
  );
};

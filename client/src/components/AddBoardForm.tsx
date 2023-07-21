import { Dispatch, SetStateAction } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";

type Inputs = {
  name: string;
};

type NewBoard = {
  id: string;
  name: string;
  owner: string;
};

interface AddBoardFormProps {
  boards?: NewBoard[];
  setBoards?: SetStateAction<Dispatch<NewBoard[]>>;
  addBoard: (board: NewBoard) => void | Promise<void>;
}

export const AddBoardForm = ({ addBoard }: AddBoardFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const newId = uuidv4();
    const owner = localStorage.getItem("user");

    if (owner === null) return;

    addBoard({
      id: newId,
      name: data.name,
      owner: JSON.parse(owner).id,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")} />
      <button type="submit">Add Board</button>
    </form>
  );
};

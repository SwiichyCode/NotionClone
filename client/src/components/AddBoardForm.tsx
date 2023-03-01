import { useForm, SubmitHandler } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";

type Inputs = {
  name: string;
};

type NewBoard = {
  _id?: string;
  name: string;
};

interface AddBoardFormProps {
  boards: NewBoard[];
  setBoards: any;
  addBoard: any;
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

    addBoard({
      id: newId,
      name: data.name,
      owner: JSON.parse(owner as string).id,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")} />
      <button type="submit">Add Board</button>
    </form>
  );
};

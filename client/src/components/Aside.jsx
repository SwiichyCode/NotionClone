import { useEffect } from "react";
import { AddBoardForm } from "./AddBoardForm";
import { useBoardStore } from "../store/board.store";
import styled from "styled-components";

export const Aside = () => {
  const boards = useBoardStore((state) => state.data);
  const fetchBoards = useBoardStore((state) => state.fetch);
  const addBoard = useBoardStore((state) => state.create);
  const deleteBoard = useBoardStore((state) => state.delete);

  useEffect(() => {
    fetchBoards();
  }, [fetchBoards]);

  return (
    <Container>
      {boards.map(({ id, name }) => (
        <div key={id}>
          <h3>{name}</h3>
          <button onClick={() => deleteBoard(id)}>Delete</button>
        </div>
      ))}

      <AddBoardForm addBoard={addBoard} />
    </Container>
  );
};

const Container = styled.aside`
  width: 300px;
  height: calc(100vh - 100px);
`;

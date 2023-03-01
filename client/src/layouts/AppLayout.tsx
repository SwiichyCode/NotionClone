import { ThemesProvider } from "../providers/ThemesProvider";
import { GlobalStyle } from "../styles/globalStyles";
import styled from "styled-components";
import "../styles/index.css";

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container>
      <GlobalStyle />
      <ThemesProvider>{children}</ThemesProvider>
    </Container>
  );
};

import { ThemeProvider } from "styled-components";
import { mixins } from "../styles/mixins";

export const ThemesProvider = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={{ mixins: mixins }}>{children}</ThemeProvider>
);

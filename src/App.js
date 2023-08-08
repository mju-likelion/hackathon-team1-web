import "./App.css";
import Compare from "./pages/Compare";
import GlobalStyle from "./styles/GlobalStyle";
import { Theme } from "./styles/Theme";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Compare />
    </ThemeProvider>
  );
}

export default App;

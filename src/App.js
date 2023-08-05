import "./App.css";
import GlobalStyle from "./styles/GlobalStyle";
import { Theme } from "./styles/Theme";
import { ThemeProvider } from "styled-components";
import UpsideCompareBox from "./components/UpsideCompareBox";
import UpsideEmptyBox from "./components/UpsideEmptyBox";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <UpsideCompareBox />
    </ThemeProvider>
  );
}

export default App;

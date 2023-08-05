import "./App.css";
import GlobalStyle from "./styles/GlobalStyle";
import { Theme } from "./styles/Theme";
import { ThemeProvider } from "styled-components";
import Search from "./pages/Search";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Search />
    </ThemeProvider>
  );
}

export default App;

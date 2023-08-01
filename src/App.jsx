import "./App.css";
import GlobalStyle from "./styles/GlobalStyle";
import { Theme } from "./styles/Theme";
import { ThemeProvider } from "styled-components";

const App = () => {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
};

export default App;

import "./App.css";
import GlobalStyle from "./styles/GlobalStyle";
import { Theme } from "./styles/Theme";
import { ThemeProvider } from "styled-components";
import Detail from "./pages/Detail";
const App = () => {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Detail />
      </ThemeProvider>
    </>
  );
};

export default App;

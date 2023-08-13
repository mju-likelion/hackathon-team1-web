import "./App.css";
import GlobalStyle from "./styles/GlobalStyle";
import Main from "./pages/Main";
import Search from "./pages/Search";
import NotFound from "./pages/Error/NotFound";
import { ThemeProvider } from "styled-components";
import { Theme } from "./styles/Theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "./pages/Detail";
import Compare from "./pages/Compare";

const App = () => {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Router>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/search/*" element={<Search />} />
            <Route path="/detail" element={<Detail />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/compare" element={<Compare />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
};

export default App;

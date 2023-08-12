import "./App.css";
import GlobalStyle from "./styles/GlobalStyle";
import Main from "./pages/Main";
import Search from "./pages/Search";
import NotFound from "./pages/Error/NotFound";
import { ThemeProvider } from "styled-components";
import { Theme } from "./styles/Theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "./pages/Detail";
import Header from "./components/Header";
import Compare from "./pages/Compare";

const App = () => {
  console.log(window.location.pathname);
  const isVisible = window.location.pathname !== "/";
  const allowedPaths = ["/", "/detail", "/compare", "/search"];
  const showHeader = allowedPaths.includes(window.location.pathname);

  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Router>
          {showHeader ? <Header isVisible={isVisible} /> : null}
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/search" element={<Search />} />
            <Route path="/detail" element={<Detail />} />
            <Route path="/compare" element={<Compare />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
};

export default App;

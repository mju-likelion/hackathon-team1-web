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
import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { LogoAtom } from "./assets/atom/LogoAtom";
import ResultNothing from "./components/ResultNothing";
import { HeaderAtom } from "./assets/atom/HeaderAtom";

const App = () => {
  const path = useRecoilValue(HeaderAtom);

  const detailPath = window.location.pathname.split("/")[1];

  const allowedPaths = ["/", "compare", "detail", "search", "searchall"];

  const showHeader =
    allowedPaths.includes(path) || allowedPaths.includes(detailPath);

  const [showLogo, setShowLogo] = useRecoilState(LogoAtom);

  useEffect(() => {
    if (path === "/") {
      setShowLogo(false);
    } else {
      setShowLogo(true);
    }
  }, [path]);

  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Router>
          {showHeader && <Header isVisible={showLogo} />}
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/search/:text" element={<Search />} />
            <Route path="/searchall" element={<Search />} />
            <Route path="/detail/:infoId" element={<Detail />} />
            <Route path="*" element={<NotFound number={404} />} />
            <Route path="/404/:text" element={<ResultNothing />} />
            <Route path="/compare" element={<Compare />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
};

export default App;

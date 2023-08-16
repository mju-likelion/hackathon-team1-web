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
import { useRecoilState } from "recoil";
import { LogoAtom } from "./assets/atom/LogoAtom";

const App = () => {
  const path = window.location.pathname;
  const allowedPaths = ["/", "/detail", "/compare", "/search", "/detail/*"];
  const showHeader = allowedPaths.includes(window.location.pathname);
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
            <Route
              path="/nestjs/api/insurance-suggesters"
              element={<Search />}
            />
            <Route
              path="/nestjs/api/insurance-suggesters/all"
              element={<Search />}
            />
            <Route path="/detail/:infoId" element={<Detail />} />
            <Route path="*" element={<NotFound number={404} />} />
            <Route path="/compare" element={<Compare />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
};

export default App;

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

  /**
   * 1. 전체를 관리하는 app.jsx에서, path에 관련된 state를 관리한다.
   * 2. 1번을 가지고 useeffect를 돌리는데, main 페이지라면 로고를 보여주는 atom을 false로, 아니면 true로
   * 3. 헤더안에서 logo에 대한 렌더링 조건을 선행 조건으로 건다.
   * 4. 그러면 app.jsx에서 상태를 관리하고, 그 상태에 대한 렌더링은 헤더에서 이뤄지는 구조가 완성된다.
   */

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

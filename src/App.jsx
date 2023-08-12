import "./App.css";
import GlobalStyle from "./styles/GlobalStyle";
import Main from "./pages/Main";
import NotFound from "./pages/Error/NotFound";
import { ThemeProvider } from "styled-components";
import { Theme } from "./styles/Theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "./pages/Detail";
import Header from "./components/Header";

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
            <Route path="/detail" element={<Detail />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
};

export default App;

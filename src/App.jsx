import "./App.css";
import GlobalStyle from "./styles/GlobalStyle";
import Main from "./pages/Main";
import NotFound from "./pages/Error/NotFound";
import { ThemeProvider } from "styled-components";
import { Theme } from "./styles/Theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "./pages/Detail";
import Header from "./components/Header";
import { useState } from "react";

const App = () => {
  const [logoVisible, setLogoVisible] = useState(true);

  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Router>
          <Header isVisible={logoVisible} />
          <Routes>
            <Route
              path="/"
              element={<Main setLogoVisible={setLogoVisible} />}
            />
            <Route path="/detail" element={<Detail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
};

export default App;

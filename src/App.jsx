import "./App.css";
import GlobalStyle from "./styles/GlobalStyle";
import NotFound from "./pages/Error/NotFound";
import { ThemeProvider } from "styled-components";
import { Theme } from "./styles/Theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "./pages/Detail";

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Router>
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/detail" element={<Detail/>}/>
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
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

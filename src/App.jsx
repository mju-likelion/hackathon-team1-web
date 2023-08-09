import "./App.css";
import GlobalStyle from "./styles/GlobalStyle";
import NotFound from "./pages/Error/NotFound";
import { ThemeProvider } from "styled-components";
import { Theme } from "./styles/Theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Router>
          <Routes>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;

import "./App.css";
import LandingPage from "./pages/LandingPage";
import theme from "./theme/theme";
import { ThemeProvider } from "@mui/material/styles";
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <LandingPage></LandingPage>
      </ThemeProvider>
    </div>
  );
}

export default App;

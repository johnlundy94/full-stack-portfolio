import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import muiTheme from "./muiTheme";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={muiTheme}>
        <Home />
      </ThemeProvider>
    </div>
  );
}

export default App;

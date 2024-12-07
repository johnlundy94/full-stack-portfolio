import "./App.css";
import { useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import muiTheme from "./muiTheme";
import Home from "./Home";

function App() {
  useEffect(() => {
    window.particlesJS("particles-js", {
      particles: {
        number: { value: 100, density: { enable: true, value_area: 800 } },
        color: { value: "#ADEFD1" },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#ADEFD1",
          opacity: 0.4,
          width: 1,
        },
        move: { enable: true, speed: 0.5, random: true },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "grab" },
          onclick: { enable: true, mode: "push" },
        },
        modes: {
          grab: { distance: 200, line_linked: { opacity: 0.7 } },
          push: { particles_nb: 4 },
        },
      },
      retina_detect: true,
    });
  }, []);

  return (
    <div>
      <div id="particles-js"></div>

      <div className="App">
        <ThemeProvider theme={muiTheme}>
          <Home />
        </ThemeProvider>
      </div>
    </div>
  );
}

export default App;

import { createTheme } from "@mui/material/styles";

const muiTheme = createTheme({
  palette: {
    primary: {
      main: "#18b5d7",
      light: "#4d4d4d",
      dark: "#1c1c1c",
      contrastText: "#fbfbfb",
    },
    text: {
      primary: "#e0f6fc",
      secondary: "#fbfbfb",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#e0f6fc",
          fontFamily: '"Anta", sans-serif',
          fontWeight: "400",
          fontStyle: "normal",
          backgroundColor: "rgba(24, 181, 215, 0.5)",
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          backgroundColor: "rgba(24, 181, 215, 0.5)",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: "#e0f6fc",
          fontFamily: '"Anta", sans-serif',
          fontWeight: "400",
          fontStyle: "normal",
        },
      },
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
});

export default muiTheme;

import { createTheme } from "@mui/material/styles";

const muiTheme = createTheme({
  palette: {
    primary: {
      main: "#00203F",
      light: "#4d4d4d",
      contrastText: "#fe4f25",
    },
    text: {
      primary: "#ADEFD1",
      secondary: "#fe4f25",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#def9ed",
          fontFamily: '"Anta", sans-serif',
          fontWeight: "400",
          fontStyle: "normal",
          backgroundColor: "rgba(0, 32, 63, 0.7)",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#def9ed",
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          backgroundColor: "rgba(0, 32, 63, 0.7)",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: "#def9ed",
          fontFamily: '"Anta", sans-serif',
          fontWeight: "400",
          fontStyle: "normal",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#ADEFD1",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#ADEFD1",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#ADEFD1",
          },
        },
      },
    },
  },
});

export default muiTheme;

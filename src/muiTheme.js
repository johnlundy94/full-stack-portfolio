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
          backgroundColor: "#1b4c6f",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          color: "#def9ed",
          borderRadius: "8px",
          fontFamily: '"Anta", sans-serif',
          fontWeight: "400",
          fontStyle: "normal",
          "&:hover": {
            backgroundColor: "#165376",
          },
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
          backgroundColor: "#1B4C6F",
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
    MuiDialog: {
      styleOverrides: {
        paper: {
          textAlign: "left",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          backgroundColor: "#1b4c6f",
          borderRadius: "20px",
          padding: "10px",
          color: "#ffffff",
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          color: "#a8dadc",
        },
      },
    },
    MuiDialogContentText: {
      styleOverrides: {
        root: {
          color: "#f1faee",
        },
      },
    },
  },
});

export default muiTheme;

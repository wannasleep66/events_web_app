import {createTheme} from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        mode: "light",
        primary: {main: "#90caf9"},
        secondary: {main: "#64b5f6"},
        background: {default: "#ffffff", paper: "#f5f5f5"},
        text: {primary: "#000000", secondary: "#424242"},
    },
    typography: {
        fontFamily: "Inter",
        h1: {fontWeight: 600, fontSize: "2rem"},
        body1: {fontSize: "1rem"},
    },
});

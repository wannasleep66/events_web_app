import {ThemeProvider} from "@mui/material";
import {theme} from "../../../app/styles/theme.ts";
import * as React from "react";
import {Outlet} from "react-router";

export const MainLayout: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <Outlet/>
        </ThemeProvider>
    );
};

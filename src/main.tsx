import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import "./app/styles/reset.css";
import { theme, router } from "./app";
import { CssBaseline } from "@mui/material";

createRoot(document.getElementById("root")!).render(
   <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
   </ThemeProvider>
);

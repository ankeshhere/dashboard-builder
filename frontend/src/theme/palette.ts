import type  { PaletteMode } from "@mui/material";

export const getPalette = (mode: PaletteMode) => ({
  mode,

  primary: {
    main: "#1976d2"
  },

  secondary: {
    main: "#26a69a"
  },

  background: {
    default: mode === "light" ? "#f5f7fb" : "#121212",
    paper: mode === "light" ? "#ffffff" : "#1e1e1e"
  }
});
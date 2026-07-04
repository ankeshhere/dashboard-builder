import { createTheme } from "@mui/material/styles";
import type  { PaletteMode } from "@mui/material";
import { getPalette } from "./palette";
import { typography } from "./typography";

export const createAppTheme = (mode: PaletteMode) =>
  createTheme({
    palette: getPalette(mode),
    typography
  });
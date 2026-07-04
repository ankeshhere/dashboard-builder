import { CssBaseline, ThemeProvider } from "@mui/material";
import { useMemo, useState } from "react";
import { createAppTheme } from "./theme";

export default function AppThemeProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const [mode] = useState<"light" | "dark">("light");

  const theme = useMemo(() => createAppTheme(mode), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
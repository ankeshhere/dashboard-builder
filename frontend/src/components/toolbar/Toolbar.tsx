import { AppBar, Toolbar as MuiToolbar, Typography, Button } from "@mui/material";

export default function Toolbar() {
  return (
    <AppBar
      position="static"
      color="inherit"
      elevation={1}
    >
      <MuiToolbar>

        <Typography
          variant="h6"
          sx={{ flexGrow: 1 }}
        >
          Dashboard Builder
        </Typography>

        <Button variant="outlined">
          Preview
        </Button>

        <Button
          sx={{ ml: 2 }}
          variant="contained"
        >
          Save
        </Button>

      </MuiToolbar>
    </AppBar>
  );
}
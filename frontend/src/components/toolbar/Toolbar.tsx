import {
  AppBar,
  Toolbar as MuiToolbar,
  Typography,
  Button,
} from "@mui/material";

interface Props {
  editMode: boolean;
  onEdit: () => void;
  onSave: () => void;
  onLoad: () => void;
}

export default function Toolbar({ editMode, onEdit, onSave, onLoad }: Props) {
  return (
    <AppBar position="static" color="inherit" elevation={1}>
      <MuiToolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Dashboard Builder
        </Typography>

        <Button variant="outlined" onClick={onLoad}>
          Load
        </Button>

        {editMode ? (
          <Button sx={{ ml: 2 }} variant="contained" onClick={onSave}>
            Save
          </Button>
        ) : (
          <Button sx={{ ml: 2 }} variant="contained" onClick={onEdit}>
            Edit
          </Button>
        )}
      </MuiToolbar>
    </AppBar>
  );
}

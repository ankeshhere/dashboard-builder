import {
  Box,
  Typography,
  Divider,
  TextField
} from "@mui/material";

import WidgetCard from "./WidgetCard";
import { widgetRegistry } from "../../widgets/registry/widgetRegistry";

export default function Sidebar() {
  return (
    <Box
      sx={{
        width: 300,
        bgcolor: "background.paper",
        borderRight: 1,
        borderColor: "divider",
        p: 2,
        overflow: "auto"
      }}
    >
      <Typography variant="h6" mb={2}>
        Widgets
      </Typography>

      <TextField
        fullWidth
        size="small"
        placeholder="Search widgets..."
      />

      <Divider sx={{ my: 2 }} />

      {widgetRegistry.map(widget => (
        <WidgetCard
          key={widget.id}
          widget={widget}
        />
      ))}
    </Box>
  );
}
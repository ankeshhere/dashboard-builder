import { Box, Divider, TextField, Typography } from "@mui/material";

import WidgetCard from "./WidgetCard";

import { widgetRegistry } from "../../engine/registry/WidgetRegistry";
import { useDashboardStore } from "../../store/dashboardStore";

export default function Sidebar() {
  const widgets = widgetRegistry.getAll();
  const addWidget = useDashboardStore((state) => state.addWidget);

  return (
    <Box
      sx={{
        width: 300,
        bgcolor: "background.paper",
        borderRight: 1,
        borderColor: "divider",
        p: 2,
        overflow: "auto",
      }}
    >
      <Typography variant="h6" mb={2}>
        Widgets
      </Typography>

      <TextField fullWidth size="small" placeholder="Search widgets..." />

      <Divider sx={{ my: 2 }} />

      {widgets.map((widget) => (
        <WidgetCard
          key={widget.type}
          widget={widget}
          onClick={() => addWidget(widget.createDefault())}
        />
      ))}
    </Box>
  );
}

import { Box, Typography } from "@mui/material";
import WidgetRenderer from "./WidgetRenderer";

import { useDashboardStore } from "../../store/dashboardStore";

export default function Canvas() {
  const widgets = useDashboardStore((state) => state.widgets);

  return (
    <Box
      sx={{
        flex: 1,
        p: 3,
        overflow: "auto",
        bgcolor: "#f4f5f8",
      }}
    >
      {widgets.length === 0 && (
        <Typography color="text.secondary">
          Click a widget to add it.
        </Typography>
      )}

      {widgets.map((widget) => (
        <WidgetRenderer key={widget.id} widget={widget} />
      ))}
    </Box>
  );
}

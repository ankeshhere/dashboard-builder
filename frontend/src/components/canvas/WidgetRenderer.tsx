import { Alert, Box } from "@mui/material";

import type { Widget } from "../../types/models/Widget";

import { widgetRegistry } from "../../engine/registry/WidgetRegistry";
import { useDashboardStore } from "../../store/dashboardStore";

interface Props {
  widget: Widget;
}

export default function WidgetRenderer({ widget }: Props) {
  const plugin = widgetRegistry.get(widget.type);

  const selectedWidgetId = useDashboardStore((state) => state.selectedWidgetId);

  const selectWidget = useDashboardStore((state) => state.selectWidget);

  if (!plugin) {
    return (
      <Alert severity="warning">
        Unknown widget type: <strong>{widget.type}</strong>
      </Alert>
    );
  }

  const Renderer = plugin.renderer;

  const isSelected = selectedWidgetId === widget.id;

  return (
    <Box
      onClick={() => selectWidget(widget.id)}
      sx={{
        display: "inline-block",
        cursor: "pointer",
        border: isSelected ? "2px solid" : "2px solid transparent",
        borderColor: isSelected ? "primary.main" : "transparent",
        borderRadius: 1,
        p: 0.5,
        transition: (theme) =>
          theme.transitions.create("border-color", {
            duration: theme.transitions.duration.shortest,
          }),
      }}
    >
      <Renderer widget={widget} />
    </Box>
  );
}

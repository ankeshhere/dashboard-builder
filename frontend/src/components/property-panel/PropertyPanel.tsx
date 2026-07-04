import { Box, Divider, Typography } from "@mui/material";

import { widgetRegistry } from "../../engine/registry/WidgetRegistry";
import { useDashboardStore } from "../../store/dashboardStore";

export default function PropertyPanel() {
  const widgets = useDashboardStore((state) => state.widgets);

  const selectedWidgetId = useDashboardStore((state) => state.selectedWidgetId);

  const selectedWidget =
    widgets.find((widget) => widget.id === selectedWidgetId) ?? null;

  return (
    <Box
      sx={{
        width: 300,
        borderLeft: "1px solid",
        borderColor: "divider",
        bgcolor: "background.paper",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ p: 2 }}>
        <Typography variant="h6">Properties</Typography>
      </Box>

      <Divider />

      <Box sx={{ p: 2, flex: 1 }}>
        {!selectedWidget ? (
          <Typography color="text.secondary">
            Select a widget to edit its properties.
          </Typography>
        ) : (
          (() => {
            const plugin = widgetRegistry.get(selectedWidget.type);

            if (!plugin?.propertyEditor) {
              return (
                <Typography color="text.secondary">
                  This widget has no editable properties.
                </Typography>
              );
            }

            const PropertyEditor = plugin.propertyEditor;

            return <PropertyEditor widget={selectedWidget} />;
          })()
        )}
      </Box>
    </Box>
  );
}

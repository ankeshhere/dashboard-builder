import { Box, Paper, Stack, Typography } from "@mui/material";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import { useCallback } from "react";
import GridLayout, { WidthProvider, type Layout } from "react-grid-layout";

import WidgetRenderer from "./WidgetRenderer";
import WidgetContainer from "./WidgetContainer";

import { useDashboardStore } from "../../store/dashboardStore";

import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const GridLayoutWithWidth = WidthProvider(GridLayout);

export default function Canvas() {
  const widgets = useDashboardStore((state) => state.widgets);
  const setWidgets = useDashboardStore((state) => state.setWidgets);
  const editMode = useDashboardStore((state) => state.editMode);

  const syncLayout = useCallback(
    (layout: Layout[]) => {
      const layoutMap = new Map(layout.map((item) => [item.i, item]));

      const updatedWidgets = widgets.map((widget) => {
        const layoutItem = layoutMap.get(widget.id);

        if (!layoutItem) {
          return widget;
        }

        if (
          widget.layout.x === layoutItem.x &&
          widget.layout.y === layoutItem.y &&
          widget.layout.w === layoutItem.w &&
          widget.layout.h === layoutItem.h
        ) {
          return widget;
        }

        return {
          ...widget,
          layout: {
            x: layoutItem.x,
            y: layoutItem.y,
            w: layoutItem.w,
            h: layoutItem.h,
          },
        };
      });

      setWidgets(updatedWidgets);
    },
    [widgets, setWidgets],
  );

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
        <Box
          sx={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Paper
            elevation={0}
            sx={{
              p: 6,
              width: 420,
              textAlign: "center",
              border: "2px dashed",
              borderColor: "divider",
              bgcolor: "background.paper",
            }}
          >
            <Stack spacing={2} alignItems="center">
              <DashboardOutlinedIcon
                sx={{
                  fontSize: 72,
                  color: "text.disabled",
                }}
              />

              <Typography variant="h5">Dashboard is empty</Typography>

              <Typography color="text.secondary">
                Add widgets from the sidebar to start building your dashboard.
              </Typography>
            </Stack>
          </Paper>
        </Box>
      )}

      {widgets.length > 0 && (
        <GridLayoutWithWidth
          className="layout"
          cols={12}
          rowHeight={40}
          margin={[16, 16]}
          containerPadding={[0, 0]}
          compactType="vertical"
          isDraggable={editMode}
          isResizable={editMode}
          draggableCancel=".MuiTablePagination-root, .MuiButtonBase-root, .MuiSelect-select, input, a"
          onDragStop={syncLayout}
          onResizeStop={syncLayout}
        >
          {widgets.map((widget) => (
            <Box
              key={widget.id}
              data-grid={{
                i: widget.id,
                x: widget.layout.x,
                y: widget.layout.y,
                w: widget.layout.w,
                h: widget.layout.h,
              }}
              sx={{
                width: "100%",
                height: "100%",
              }}
            >
              <WidgetContainer widgetId={widget.id}>
                <WidgetRenderer widget={widget} />
              </WidgetContainer>
            </Box>
          ))}
        </GridLayoutWithWidth>
      )}
    </Box>
  );
}

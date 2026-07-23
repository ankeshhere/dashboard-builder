import { Paper } from "@mui/material";
import type { ReactNode } from "react";

import { useDashboardStore } from "../../store/dashboardStore";

interface Props {
  widgetId: string;
  children: ReactNode;
}

export default function WidgetContainer({ widgetId, children }: Props) {
  const selectedWidgetId = useDashboardStore((state) => state.selectedWidgetId);

  const selectWidget = useDashboardStore((state) => state.selectWidget);

  const isSelected = selectedWidgetId === widgetId;

  return (
    <Paper
      elevation={isSelected ? 4 : 1}
      onPointerDown={() => selectWidget(widgetId)}
      sx={{
        width: "100%",
        height: "100%",
        p: 2,
        overflow: "hidden",
        cursor: "pointer",
        boxSizing: "border-box",
        border: "2px solid",
        borderColor: isSelected ? "primary.main" : "transparent",
        transition: (theme) =>
          theme.transitions.create(["border-color", "box-shadow"], {
            duration: theme.transitions.duration.shortest,
          }),
      }}
    >
      {children}
    </Paper>
  );
}

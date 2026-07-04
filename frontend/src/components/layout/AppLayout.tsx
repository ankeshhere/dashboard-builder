import { Box } from "@mui/material";

import Sidebar from "../sidebar/Sidebar";
import Toolbar from "../toolbar/Toolbar";
import Canvas from "../canvas/Canvas";
import PropertyPanel from "../property-panel/PropertyPanel";

import { useDashboardStore } from "../../store/dashboardStore";
import { DashboardStorage } from "../../engine/persistence/DashboardStorage";
import useDashboardKeyboardShortcuts from "../../hooks/useDashboardKeyboardShortcuts";

export default function AppLayout() {
  useDashboardKeyboardShortcuts();

  const widgets = useDashboardStore((s) => s.widgets);
  const setWidgets = useDashboardStore((s) => s.setWidgets);
  const selectWidget = useDashboardStore((s) => s.selectWidget);

  const handleSave = () => {
    DashboardStorage.save(widgets);
  };

  const handleLoad = () => {
    const loadedWidgets = DashboardStorage.load();

    setWidgets(loadedWidgets);
    selectWidget(null);
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Toolbar onSave={handleSave} onLoad={handleLoad} />

      <Box
        sx={{
          flex: 1,
          display: "flex",
        }}
      >
        <Sidebar />

        <Canvas />

        <PropertyPanel />
      </Box>
    </Box>
  );
}

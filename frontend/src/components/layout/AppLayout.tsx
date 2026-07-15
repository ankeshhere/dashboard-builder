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
  const datasets = useDashboardStore((s) => s.datasets);

  const setWidgets = useDashboardStore((s) => s.setWidgets);
  const setDatasets = useDashboardStore((s) => s.setDatasets);

  const selectWidget = useDashboardStore((s) => s.selectWidget);

  const editMode = useDashboardStore((s) => s.editMode);
  const setEditMode = useDashboardStore((s) => s.setEditMode);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    DashboardStorage.save(widgets, datasets);
    selectWidget(null);
    setEditMode(false);
  };

  const handleLoad = () => {
    const { widgets: loadedWidgets, datasets: loadedDatasets } =
      DashboardStorage.load();

    setWidgets(loadedWidgets);
    setDatasets(loadedDatasets);

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
      <Toolbar
        editMode={editMode}
        onEdit={handleEdit}
        onSave={handleSave}
        onLoad={handleLoad}
      />

      <Box
        sx={{
          flex: 1,
          display: "flex",
        }}
      >
        {editMode && <Sidebar />}

        <Canvas />

        {editMode && <PropertyPanel />}
      </Box>
    </Box>
  );
}

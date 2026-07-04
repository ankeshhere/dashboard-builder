import { useEffect } from "react";

import { useDashboardStore } from "../store/dashboardStore";
import { isEditableElement } from "../utils/dom";

export default function useDashboardKeyboardShortcuts() {
  const selectedWidgetId = useDashboardStore((state) => state.selectedWidgetId);

  const removeWidget = useDashboardStore((state) => state.removeWidget);

  const duplicateWidget = useDashboardStore((state) => state.duplicateWidget);

  const selectWidget = useDashboardStore((state) => state.selectWidget);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (isEditableElement(event.target)) {
        return;
      }

      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "d") {
        event.preventDefault();

        if (selectedWidgetId) {
          duplicateWidget(selectedWidgetId);
        }

        return;
      }

      if (event.key !== "Delete" && event.key !== "Backspace") {
        return;
      }

      if (!selectedWidgetId) {
        return;
      }

      event.preventDefault();

      removeWidget(selectedWidgetId);
      selectWidget(null);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedWidgetId, removeWidget, duplicateWidget, selectWidget]);
}

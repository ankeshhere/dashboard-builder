import { create } from "zustand";

import { createDatasetSlice, type DatasetSlice } from "./slices/datasetSlice";
import {
  createSelectionSlice,
  type SelectionSlice,
} from "./slices/selectionSlice";
import { createWidgetSlice, type WidgetSlice } from "./slices/widgetSlice";

export interface DashboardState
  extends WidgetSlice, DatasetSlice, SelectionSlice {
  clear: () => void;
}

export const useDashboardStore = create<DashboardState>()((set, get, api) => ({
  ...createWidgetSlice(set, get, api),

  ...createDatasetSlice(set, get, api),

  ...createSelectionSlice(set, get, api),

  clear: () =>
    set({
      widgets: [],
      datasets: [],
      selectedWidgetId: null,
      editMode: false,
    }),
}));

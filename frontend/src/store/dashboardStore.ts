import { create } from "zustand";

import type { Widget } from "../types/models/Widget";

interface DashboardState {
  widgets: Widget[];

  selectedWidgetId: string | null;

  addWidget: (widget: Widget) => void;

  removeWidget: (id: string) => void;

  selectWidget: (id: string | null) => void;

  updateWidget: (widget: Widget) => void;

  clear: () => void;
}

export const useDashboardStore = create<DashboardState>((set) => ({

  widgets: [],

  selectedWidgetId: null,

  addWidget: (widget) =>
    set((state) => ({
      widgets: [...state.widgets, widget],
    })),

  removeWidget: (id) =>
    set((state) => ({
      widgets: state.widgets.filter((w) => w.id !== id),
    })),

  selectWidget: (id) =>
    set({
      selectedWidgetId: id,
    }),

  updateWidget: (widget) =>
    set((state) => ({
      widgets: state.widgets.map((w) =>
        w.id === widget.id ? widget : w
      ),
    })),

  clear: () =>
    set({
      widgets: [],
      selectedWidgetId: null,
    }),

}));
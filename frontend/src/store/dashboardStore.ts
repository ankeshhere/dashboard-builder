import { create } from "zustand";

import type { Widget } from "../types/models/Widget";
import { generateWidgetId } from "../utils/id";

interface DashboardState {
  widgets: Widget[];

  selectedWidgetId: string | null;

  addWidget: (widget: Widget) => void;

  removeWidget: (id: string) => void;

  duplicateWidget: (id: string) => void;

  selectWidget: (id: string | null) => void;

  updateWidget: (widget: Widget) => void;

  setWidgets: (widgets: Widget[]) => void;

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

  duplicateWidget: (id) =>
    set((state) => {
      const widget = state.widgets.find((w) => w.id === id);

      if (!widget) {
        return state;
      }

      const duplicatedWidget: Widget = {
        ...widget,
        id: generateWidgetId(),
        name: `${widget.name} Copy`,
        layout: {
          ...widget.layout,
          x: widget.layout.x + 1,
          y: widget.layout.y + 1,
        },
      };

      return {
        widgets: [...state.widgets, duplicatedWidget],
        selectedWidgetId: duplicatedWidget.id,
      };
    }),

  selectWidget: (id) =>
    set({
      selectedWidgetId: id,
    }),

  updateWidget: (widget) =>
    set((state) => ({
      widgets: state.widgets.map((w) => (w.id === widget.id ? widget : w)),
    })),

  setWidgets: (widgets) =>
    set({
      widgets,
    }),

  clear: () =>
    set({
      widgets: [],
      selectedWidgetId: null,
    }),
}));

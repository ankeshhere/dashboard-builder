import type { StateCreator } from "zustand";

import type { Widget } from "../../types/models/Widget";

import { generateWidgetId } from "../../utils/id";

export interface WidgetSlice {
  widgets: Widget[];

  addWidget: (widget: Widget) => void;

  removeWidget: (id: string) => void;

  duplicateWidget: (id: string) => void;

  updateWidget: (widget: Widget) => void;

  updateWidgetData: (id: string, data: Widget["data"]) => void;

  updateWidgetProperties: (
    id: string,
    properties: Partial<Widget["properties"]>,
  ) => void;

  updateWidgetDataSource: (
    id: string,
    dataSource: Widget["dataSource"],
  ) => void;

  setWidgets: (widgets: Widget[]) => void;
}

export const createWidgetSlice: StateCreator<
  WidgetSlice,
  [],
  [],
  WidgetSlice
> = (set) => ({
  widgets: [],

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

  updateWidget: (widget) =>
    set((state) => ({
      widgets: state.widgets.map((w) => (w.id === widget.id ? widget : w)),
    })),

  updateWidgetData: (id, data) =>
    set((state) => ({
      widgets: state.widgets.map((widget) =>
        widget.id === id
          ? {
              ...widget,
              data,
            }
          : widget,
      ),
    })),

  updateWidgetProperties: (id, properties) =>
    set((state) => ({
      widgets: state.widgets.map((widget) =>
        widget.id === id
          ? {
              ...widget,
              properties: {
                ...widget.properties,
                ...properties,
              },
            }
          : widget,
      ),
    })),

  updateWidgetDataSource: (id, dataSource) =>
    set((state) => ({
      widgets: state.widgets.map((widget) =>
        widget.id === id
          ? {
              ...widget,
              dataSource,
            }
          : widget,
      ),
    })),

  setWidgets: (widgets) =>
    set({
      widgets,
    }),
});

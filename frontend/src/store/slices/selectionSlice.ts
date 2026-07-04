import type { StateCreator } from "zustand";

export interface SelectionSlice {
  selectedWidgetId: string | null;

  selectWidget: (id: string | null) => void;
}

export const createSelectionSlice: StateCreator<
  SelectionSlice,
  [],
  [],
  SelectionSlice
> = (set) => ({
  selectedWidgetId: null,

  selectWidget: (id) =>
    set({
      selectedWidgetId: id,
    }),
});

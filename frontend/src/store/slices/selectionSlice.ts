import type { StateCreator } from "zustand";

export interface SelectionSlice {
  selectedWidgetId: string | null;
  editMode: boolean;

  selectWidget: (id: string | null) => void;
  setEditMode: (editMode: boolean) => void;
}

export const createSelectionSlice: StateCreator<
  SelectionSlice,
  [],
  [],
  SelectionSlice
> = (set) => ({
  selectedWidgetId: null,
  editMode: false,

  selectWidget: (id) =>
    set({
      selectedWidgetId: id,
    }),

  setEditMode: (editMode) =>
    set({
      editMode,
    }),
});

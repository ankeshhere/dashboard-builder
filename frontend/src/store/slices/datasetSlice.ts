import type { StateCreator } from "zustand";

import type { Dataset } from "../../types/dashboard/Dataset";

export interface DatasetSlice {
  datasets: Dataset[];

  addDataset: (dataset: Dataset) => void;

  updateDataset: (dataset: Dataset) => void;

  removeDataset: (id: string) => void;

  setDatasets: (datasets: Dataset[]) => void;
}

export const createDatasetSlice: StateCreator<
  DatasetSlice,
  [],
  [],
  DatasetSlice
> = (set) => ({
  datasets: [],

  addDataset: (dataset) =>
    set((state) => ({
      datasets: [...state.datasets, dataset],
    })),

  updateDataset: (dataset) =>
    set((state) => ({
      datasets: state.datasets.map((d) => (d.id === dataset.id ? dataset : d)),
    })),

  removeDataset: (id) =>
    set((state) => ({
      datasets: state.datasets.filter((d) => d.id !== id),
    })),

  setDatasets: (datasets) =>
    set({
      datasets,
    }),
});

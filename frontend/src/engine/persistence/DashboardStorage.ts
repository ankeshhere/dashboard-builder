import type { Widget } from "../../types/models/Widget";
import type { Dataset } from "../../types/dashboard/Dataset";
import { DashboardSerializer } from "./DashboardSerializer";

export class DashboardStorage {
  private static readonly STORAGE_KEY = "dashboard-builder";

  static save(widgets: Widget[], datasets: Dataset[] = []): void {
    const json = DashboardSerializer.serialize(widgets, datasets);

    localStorage.setItem(DashboardStorage.STORAGE_KEY, json);
  }

  static load(): {
    widgets: Widget[];
    datasets: Dataset[];
  } {
    const json = localStorage.getItem(DashboardStorage.STORAGE_KEY);

    if (!json) {
      return {
        widgets: [],
        datasets: [],
      };
    }

    try {
      return DashboardSerializer.deserialize(json);
    } catch (error) {
      console.error("Failed to load dashboard.", error);

      return {
        widgets: [],
        datasets: [],
      };
    }
  }

  static clear(): void {
    localStorage.removeItem(DashboardStorage.STORAGE_KEY);
  }
}

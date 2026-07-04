import type { Widget } from "../../types/models/Widget";
import { DashboardSerializer } from "./DashboardSerializer";

export class DashboardStorage {
  private static readonly STORAGE_KEY = "dashboard-builder";

  static save(widgets: Widget[]): void {
    const json = DashboardSerializer.serialize(widgets);

    localStorage.setItem(DashboardStorage.STORAGE_KEY, json);
  }

  static load(): Widget[] {
    const json = localStorage.getItem(DashboardStorage.STORAGE_KEY);

    if (!json) {
      return [];
    }

    try {
      return DashboardSerializer.deserialize(json);
    } catch (error) {
      console.error("Failed to load dashboard.", error);
      return [];
    }
  }

  static clear(): void {
    localStorage.removeItem(DashboardStorage.STORAGE_KEY);
  }
}
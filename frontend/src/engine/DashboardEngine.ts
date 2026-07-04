import { widgetRegistry } from "./registry/WidgetRegistry";

export class DashboardEngine {
  getAvailableWidgets() {
    return widgetRegistry.getAll();
  }
}

export const dashboardEngine = new DashboardEngine();

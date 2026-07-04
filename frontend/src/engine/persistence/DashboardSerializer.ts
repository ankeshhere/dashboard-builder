import type { Widget } from "../../types/models/Widget";
import type { Dataset } from "../../types/dashboard/Dataset";

interface DashboardDocument {
  version: number;
  widgets: Widget[];
  datasets: Dataset[];
}

export class DashboardSerializer {
  private static readonly VERSION = 2;

  static serialize(widgets: Widget[], datasets: Dataset[] = []): string {
    const document: DashboardDocument = {
      version: DashboardSerializer.VERSION,
      widgets,
      datasets,
    };

    return JSON.stringify(document);
  }

  static deserialize(json: string): DashboardDocument {
    const document = JSON.parse(json);

    if (typeof document !== "object" || document === null) {
      throw new Error("Invalid dashboard format.");
    }

    // Migration from Version 1
    if (document.version === 1) {
      if (!Array.isArray(document.widgets)) {
        throw new Error("Invalid dashboard format.");
      }

      return {
        version: DashboardSerializer.VERSION,
        widgets: document.widgets,
        datasets: [],
      };
    }

    if (document.version !== DashboardSerializer.VERSION) {
      throw new Error(`Unsupported dashboard version: ${document.version}`);
    }

    if (!Array.isArray(document.widgets)) {
      throw new Error("Invalid dashboard format.");
    }

    if (!Array.isArray(document.datasets)) {
      throw new Error("Invalid dashboard format.");
    }

    return document as DashboardDocument;
  }
}

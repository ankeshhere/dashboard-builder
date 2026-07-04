import type { Widget } from "../../types/models/Widget";

interface DashboardDocument {
  version: number;
  widgets: Widget[];
}

export class DashboardSerializer {
  private static readonly VERSION = 1;

  static serialize(widgets: Widget[]): string {
    const document: DashboardDocument = {
      version: DashboardSerializer.VERSION,
      widgets,
    };

    return JSON.stringify(document);
  }

  static deserialize(json: string): Widget[] {
  const document = JSON.parse(json) as DashboardDocument;

  if (
    typeof document !== "object" ||
    document === null
  ) {
    throw new Error("Invalid dashboard format.");
  }

  if (document.version !== DashboardSerializer.VERSION) {
    throw new Error(
      `Unsupported dashboard version: ${document.version}`
    );
  }

  if (!Array.isArray(document.widgets)) {
    throw new Error("Invalid dashboard format.");
  }

  return document.widgets;
}
}
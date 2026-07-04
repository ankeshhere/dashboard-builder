import type { WidgetLayout } from "./WidgetLayout";

export interface Widget {
  id: string;

  type: string;

  layout: WidgetLayout;

  properties: Record<string, unknown>;
}
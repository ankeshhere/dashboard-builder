import type { LucideIcon } from "lucide-react";
import type { ComponentType } from "react";

import type { Widget } from "../../types/models/Widget";

export interface WidgetComponentProps {
  widget: Widget;
}

export interface IWidgetPlugin {
  type: string;

  displayName: string;

  category: string;

  icon: LucideIcon;

  createDefault(): Widget;

  renderer: ComponentType<WidgetComponentProps>;

  propertyEditor?: ComponentType<WidgetComponentProps>;
}
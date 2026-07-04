import { Gauge } from "lucide-react";

import type { IWidgetPlugin } from "../../engine/plugins/IWidgetPlugin";

import { createProgressWidget } from "./ProgressDefaults";
import ProgressRenderer from "./ProgressRenderer";
import ProgressPropertyEditor from "./ProgressPropertyEditor";

export const ProgressPlugin: IWidgetPlugin = {
  type: "progress",

  displayName: "Progress Bar",

  category: "Indicators",

  icon: Gauge,

  createDefault: createProgressWidget,

  renderer: ProgressRenderer,

  propertyEditor: ProgressPropertyEditor,
};

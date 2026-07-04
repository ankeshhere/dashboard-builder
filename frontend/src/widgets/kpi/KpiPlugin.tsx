import { BadgeIndianRupee } from "lucide-react";

import type { IWidgetPlugin } from "../../engine/plugins/IWidgetPlugin";

import { createKpiWidget } from "./KpiDefaults";
import KpiRenderer from "./KpiRenderer";
import KpiPropertyEditor from "./KpiPropertyEditor";

export const KpiPlugin: IWidgetPlugin = {
  type: "kpi",

  displayName: "KPI Card",

  category: "Indicators",

  icon: BadgeIndianRupee,

  createDefault: createKpiWidget,

  renderer: KpiRenderer,

  propertyEditor: KpiPropertyEditor,
};

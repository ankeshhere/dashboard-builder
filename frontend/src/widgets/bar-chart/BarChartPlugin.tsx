import { ChartColumn } from "lucide-react";

import type { IWidgetPlugin } from "../../engine/plugins/IWidgetPlugin";

import { createBarChartWidget } from "./BarChartDefaults";
import BarChartRenderer from "./BarChartRenderer";
import BarChartPropertyEditor from "./BarChartPropertyEditor";

export const BarChartPlugin: IWidgetPlugin = {
  type: "bar-chart",

  displayName: "Bar Chart",

  category: "Charts",

  icon: ChartColumn,

  createDefault: createBarChartWidget,

  renderer: BarChartRenderer,

  propertyEditor: BarChartPropertyEditor,
};

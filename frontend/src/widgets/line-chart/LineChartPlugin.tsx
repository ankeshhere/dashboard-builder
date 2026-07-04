import { ChartLine } from "lucide-react";

import type { IWidgetPlugin } from "../../engine/plugins/IWidgetPlugin";

import { createLineChartWidget } from "./LineChartDefaults";
import LineChartPropertyEditor from "./LineChartPropertyEditor";
import LineChartRenderer from "./LineChartRenderer";

export const LineChartPlugin: IWidgetPlugin = {
  type: "line-chart",

  displayName: "Line Chart",

  category: "Charts",

  icon: ChartLine,

  createDefault: createLineChartWidget,

  renderer: LineChartRenderer,

  propertyEditor: LineChartPropertyEditor,
};

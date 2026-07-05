import { ChartPie } from "lucide-react";

import type { IWidgetPlugin } from "../../engine/plugins/IWidgetPlugin";

import { createPieChartWidget } from "./PieChartDefaults";
import PieChartPropertyEditor from "./PieChartPropertyEditor";
import PieChartRenderer from "./PieChartRenderer";

export const PieChartPlugin: IWidgetPlugin = {
  type: "pie-chart",

  displayName: "Pie Chart",

  category: "Charts",

  icon: ChartPie,

  createDefault: createPieChartWidget,

  renderer: PieChartRenderer,

  propertyEditor: PieChartPropertyEditor,
};

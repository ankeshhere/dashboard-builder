import ChartDataEditor from "../../components/charts/ChartDataEditor";

import type { WidgetComponentProps } from "../../engine/plugins/IWidgetPlugin";

export default function PieChartPropertyEditor({
  widget,
}: WidgetComponentProps) {
  return <ChartDataEditor widget={widget} heading="Pie Chart Properties" />;
}

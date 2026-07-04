import ChartDataEditor from "../../components/charts/ChartDataEditor";

import type { WidgetComponentProps } from "../../engine/plugins/IWidgetPlugin";

export default function LineChartPropertyEditor({
  widget,
}: WidgetComponentProps) {
  return <ChartDataEditor widget={widget} heading="Line Chart Properties" />;
}

import DashboardLineChart from "../../components/charts/DashboardLineChart";
import type { WidgetComponentProps } from "../../engine/plugins/IWidgetPlugin";

export default function LineChartRenderer({ widget }: WidgetComponentProps) {
  return (
    <DashboardLineChart
      title={widget.properties.title ?? "Line Chart"}
      categories={widget.data.categories ?? []}
      values={widget.data.values ?? []}
    />
  );
}

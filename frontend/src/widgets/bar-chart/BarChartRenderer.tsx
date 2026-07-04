import DashboardBarChart from "../../components/charts/DashboardBarChart";
import type { WidgetComponentProps } from "../../engine/plugins/IWidgetPlugin";

export default function BarChartRenderer({ widget }: WidgetComponentProps) {
  return (
    <DashboardBarChart
      title={widget.properties.title ?? "Bar Chart"}
      categories={widget.data.categories ?? []}
      values={widget.data.values ?? []}
    />
  );
}

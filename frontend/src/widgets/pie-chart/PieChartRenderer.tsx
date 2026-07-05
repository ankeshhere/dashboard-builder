import DashboardPieChart from "../../components/charts/DashboardPieChart";
import type { WidgetComponentProps } from "../../engine/plugins/IWidgetPlugin";

export default function PieChartRenderer({ widget }: WidgetComponentProps) {
  return (
    <DashboardPieChart
      title={widget.properties.title ?? "Pie Chart"}
      categories={widget.data.categories ?? []}
      values={widget.data.values ?? []}
    />
  );
}

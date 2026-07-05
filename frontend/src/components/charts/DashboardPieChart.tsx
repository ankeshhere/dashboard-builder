import { PieChart } from "@mui/x-charts/PieChart";

import ChartContainer from "./ChartContainer";
import { chartMargin } from "./ChartDefaults";

interface DashboardPieChartProps {
  title?: string;
  categories: string[];
  values: number[];
  height?: number;
}

export default function DashboardPieChart({
  title,
  categories,
  values,
  height = 220,
}: DashboardPieChartProps) {
  const isEmpty =
    categories.length === 0 ||
    values.length === 0 ||
    categories.length !== values.length;

  const data = categories.map((label, index) => ({
    id: index,
    label,
    value: values[index],
  }));

  return (
    <ChartContainer title={title} isEmpty={isEmpty}>
      <PieChart
        series={[
          {
            data,
          },
        ]}
        margin={chartMargin}
        height={height}
      />
    </ChartContainer>
  );
}

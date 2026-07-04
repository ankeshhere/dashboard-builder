import { LineChart } from "@mui/x-charts/LineChart";

import ChartContainer from "./ChartContainer";
import { chartMargin, defaultGrid } from "./ChartDefaults";

interface DashboardLineChartProps {
  title?: string;
  categories: string[];
  values: number[];
  height?: number;
}

export default function DashboardLineChart({
  title,
  categories,
  values,
  height = 220,
}: DashboardLineChartProps) {
  const isEmpty =
    categories.length === 0 ||
    values.length === 0 ||
    categories.length !== values.length;

  return (
    <ChartContainer title={title} isEmpty={isEmpty}>
      <LineChart
        xAxis={[
          {
            scaleType: "point",
            data: categories,
          },
        ]}
        series={[
          {
            data: values,
            label: title,
          },
        ]}
        margin={chartMargin}
        grid={defaultGrid}
        height={height}
      />
    </ChartContainer>
  );
}

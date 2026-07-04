import { BarChart } from "@mui/x-charts/BarChart";

import ChartContainer from "./ChartContainer";
import { chartMargin, defaultGrid } from "./ChartDefaults";

interface DashboardBarChartProps {
  title?: string;
  categories: string[];
  values: number[];
  height?: number;
}

export default function DashboardBarChart({
  title,
  categories,
  values,
  height = 220,
}: DashboardBarChartProps) {
  const isEmpty =
    categories.length === 0 ||
    values.length === 0 ||
    categories.length !== values.length;

  return (
    <ChartContainer title={title} isEmpty={isEmpty}>
      <BarChart
        xAxis={[
          {
            scaleType: "band",
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

import { Box, Typography } from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";

import type { WidgetComponentProps } from "../../engine/plugins/IWidgetPlugin";

export default function BarChartRenderer({ widget }: WidgetComponentProps) {
  const title = widget.properties.title ?? "Bar Chart";

  const categories = widget.data.categories ?? [];

  const values = widget.data.values ?? [];

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography variant="subtitle1" sx={{ mb: 1 }}>
        {title}
      </Typography>

      <Box
        sx={{
          flex: 1,
          minHeight: 0,
        }}
      >
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
          height={220}
        />
      </Box>
    </Box>
  );
}

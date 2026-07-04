import { Box, Typography } from "@mui/material";

import type { WidgetComponentProps } from "../../engine/plugins/IWidgetPlugin";

export default function KpiRenderer({ widget }: WidgetComponentProps) {
  const title = widget.properties.title ?? "Metric";

  const value = widget.properties.value ?? 0;

  const prefix = widget.properties.valuePrefix ?? "";

  const suffix = widget.properties.valueSuffix ?? "";

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Typography variant="subtitle2" color="text.secondary">
        {title}
      </Typography>

      <Typography
        variant="h3"
        fontWeight={700}
        sx={{
          mt: 1,
        }}
      >
        {prefix}
        {value}
        {suffix}
      </Typography>
    </Box>
  );
}

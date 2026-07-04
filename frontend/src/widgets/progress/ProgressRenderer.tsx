import { Box, LinearProgress, Typography } from "@mui/material";

import type { Widget } from "../../types/models/Widget";

interface Props {
  widget: Widget;
}

export default function ProgressRenderer({ widget }: Props) {
  const title = widget.properties.title ?? "Progress";

  const value = Math.max(0, Math.min(100, widget.properties.value ?? 0));

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography variant="subtitle1">{title}</Typography>

      <Box
        sx={{
          flexGrow: 1,
        }}
      />

      <LinearProgress variant="determinate" value={value} />

      <Typography
        variant="body2"
        color="text.secondary"
        align="right"
        sx={{
          mt: 1,
        }}
      >
        {value}%
      </Typography>
    </Box>
  );
}

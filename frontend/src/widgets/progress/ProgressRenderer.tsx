import { Box, LinearProgress, Paper, Typography } from "@mui/material";

import type { Widget } from "../../types/models/Widget";

interface Props {
  widget: Widget;
}

export default function ProgressRenderer({ widget }: Props) {
  const title = widget.properties.title ?? "Progress";

  const value = Math.max(0, Math.min(100, widget.properties.value ?? 0));

  return (
    <Paper
      elevation={1}
      sx={{
        p: 2,
        mb: 2,
      }}
    >
      <Typography variant="subtitle1" gutterBottom>
        {title}
      </Typography>

      <LinearProgress variant="determinate" value={value} />

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          mt: 1,
        }}
      >
        <Typography variant="body2" color="text.secondary">
          {value}%
        </Typography>
      </Box>
    </Paper>
  );
}

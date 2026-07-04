import { Paper, Typography } from "@mui/material";

import type { Widget } from "../../types/models/Widget";

interface Props {
  widget: Widget;
}

export default function TextRenderer({ widget }: Props) {
  const text = widget.properties.text ?? widget.properties.title ?? "Untitled";

  return (
    <Paper
      elevation={1}
      sx={{
        p: 2,
        mb: 2,
      }}
    >
      <Typography variant="h6">{text}</Typography>
    </Paper>
  );
}

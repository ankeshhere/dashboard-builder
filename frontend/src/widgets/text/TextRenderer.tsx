import { Box, Typography } from "@mui/material";

import type { Widget } from "../../types/models/Widget";

interface Props {
  widget: Widget;
}

export default function TextRenderer({ widget }: Props) {
  const text = widget.properties.text ?? widget.properties.title ?? "Untitled";

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h5" textAlign="center">
        {text}
      </Typography>
    </Box>
  );
}

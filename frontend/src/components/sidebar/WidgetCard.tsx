import { Box, Card, Typography } from "@mui/material";
import type { WidgetDefinition } from "../../types/WidgetDefinition";

interface Props {
  widget: WidgetDefinition;
}

export default function WidgetCard({ widget }: Props) {
  const Icon = widget.icon;

  return (
    <Card
      sx={{
        p: 2,
        mb: 1,
        cursor: "pointer",
        transition: "0.2s",
        "&:hover": {
          transform: "translateY(-2px)",
          boxShadow: 4,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Icon size={22} />

        <Box>
          <Typography
            variant="subtitle2"
            fontWeight={600}
          >
            {widget.name}
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
          >
            {widget.description}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
}
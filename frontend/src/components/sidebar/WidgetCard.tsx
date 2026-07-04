import { Box, Card, Typography } from "@mui/material";
import type { IWidgetPlugin } from "../../engine/plugins/IWidgetPlugin";

interface Props {
  widget: IWidgetPlugin;
  onClick: () => void;
}

export default function WidgetCard({ widget, onClick }: Props) {
  const Icon = widget.icon;

  return (
    <Card
      onClick={onClick}
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
          <Typography variant="subtitle2" fontWeight={600}>
            {widget.displayName}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {widget.category}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
}

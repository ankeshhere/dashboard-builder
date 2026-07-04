import { Box, Typography } from "@mui/material";
import type { ReactNode } from "react";

interface Props {
  title?: string;
  isEmpty?: boolean;
  emptyMessage?: string;
  children: ReactNode;
}

export default function ChartContainer({
  title,
  isEmpty = false,
  emptyMessage = "No data available",
  children,
}: Props) {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {title && (
        <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 1 }}>
          {title}
        </Typography>
      )}

      <Box
        sx={{
          flex: 1,
          minHeight: 0,
          display: "flex",
        }}
      >
        {isEmpty ? (
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography color="text.secondary">{emptyMessage}</Typography>
          </Box>
        ) : (
          children
        )}
      </Box>
    </Box>
  );
}

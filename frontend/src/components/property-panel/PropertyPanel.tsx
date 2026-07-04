import { Box, Typography } from "@mui/material";

export default function PropertyPanel() {
  return (
    <Box
      sx={{
        width: 300,
        borderLeft: "1px solid #ddd",
        bgcolor: "#fafafa",
        p: 2
      }}
    >
      <Typography variant="h6">
        Properties
      </Typography>
    </Box>
  );
}
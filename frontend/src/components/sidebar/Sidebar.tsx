import { Box, Typography, Divider } from "@mui/material";

const items = [
  "Charts",
  "Tables",
  "KPI",
  "Filters",
  "Text",
  "Images"
];

export default function Sidebar() {
  return (
    <Box
      sx={{
        width: 240,
        bgcolor: "#fafafa",
        borderRight: "1px solid #ddd",
        height: "100%"
      }}
    >
      <Typography
        variant="h6"
        sx={{ p: 2 }}
      >
        Widgets
      </Typography>

      <Divider />

      {items.map((item) => (
        <Box
          key={item}
          sx={{
            p: 2,
            cursor: "pointer",
            "&:hover": {
              bgcolor: "#ececec"
            }
          }}
        >
          {item}
        </Box>
      ))}
    </Box>
  );
}
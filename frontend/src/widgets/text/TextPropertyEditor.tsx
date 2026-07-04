import { TextField, Typography } from "@mui/material";

import type { WidgetComponentProps } from "../../engine/plugins/IWidgetPlugin";

import { useDashboardStore } from "../../store/dashboardStore";

export default function TextPropertyEditor({ widget }: WidgetComponentProps) {
  const updateWidget = useDashboardStore((state) => state.updateWidget);

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateWidget({
      ...widget,
      properties: {
        ...widget.properties,
        text: event.target.value,
      },
    });
  };

  return (
    <>
      <Typography variant="subtitle1" gutterBottom>
        Text Properties
      </Typography>

      <TextField
        label="Text"
        fullWidth
        value={widget.properties.text ?? ""}
        onChange={handleTextChange}
        margin="normal"
      />
    </>
  );
}

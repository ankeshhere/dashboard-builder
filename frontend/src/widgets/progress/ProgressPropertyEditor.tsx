import { Slider, Stack, TextField, Typography } from "@mui/material";

import type { WidgetComponentProps } from "../../engine/plugins/IWidgetPlugin";

import { useDashboardStore } from "../../store/dashboardStore";

export default function ProgressPropertyEditor({
  widget,
}: WidgetComponentProps) {
  const updateWidget = useDashboardStore((state) => state.updateWidget);

  const title = widget.properties.title ?? "Progress";
  const value = widget.properties.value ?? 0;

  const updateProperties = (properties: typeof widget.properties) => {
    updateWidget({
      ...widget,
      properties,
    });
  };

  return (
    <Stack spacing={3}>
      <Typography variant="subtitle1">Progress Properties</Typography>

      <TextField
        label="Title"
        fullWidth
        value={title}
        onChange={(event) =>
          updateProperties({
            ...widget.properties,
            title: event.target.value,
          })
        }
      />

      <Typography gutterBottom>Progress</Typography>

      <Slider
        min={0}
        max={100}
        value={value}
        valueLabelDisplay="auto"
        onChange={(_, newValue) =>
          updateProperties({
            ...widget.properties,
            value: newValue as number,
          })
        }
      />

      <TextField
        label="Percentage"
        type="number"
        fullWidth
        value={value}
        slotProps={{
          htmlInput: {
            min: 0,
            max: 100,
          },
        }}
        onChange={(event) => {
          const next = Number(event.target.value);

          updateProperties({
            ...widget.properties,
            value: Math.max(0, Math.min(100, next)),
          });
        }}
      />
    </Stack>
  );
}

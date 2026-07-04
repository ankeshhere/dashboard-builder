import { Stack, TextField, Typography } from "@mui/material";

import type { WidgetComponentProps } from "../../engine/plugins/IWidgetPlugin";

import { useDashboardStore } from "../../store/dashboardStore";

export default function BarChartPropertyEditor({
  widget,
}: WidgetComponentProps) {
  const updateWidget = useDashboardStore((state) => state.updateWidget);

  const categories = widget.data.categories ?? [];

  const values = widget.data.values ?? [];

  return (
    <Stack spacing={3}>
      <Typography variant="subtitle1">Bar Chart Properties</Typography>

      <TextField
        label="Title"
        fullWidth
        value={widget.properties.title ?? ""}
        onChange={(event) =>
          updateWidget({
            ...widget,
            properties: {
              ...widget.properties,
              title: event.target.value,
            },
          })
        }
      />

      <TextField
        label="Categories (comma separated)"
        fullWidth
        value={categories.join(", ")}
        onChange={(event) =>
          updateWidget({
            ...widget,
            data: {
              ...widget.data,
              categories: event.target.value
                .split(",")
                .map((x) => x.trim())
                .filter(Boolean),
            },
          })
        }
      />

      <TextField
        label="Values (comma separated)"
        fullWidth
        value={values.join(", ")}
        onChange={(event) =>
          updateWidget({
            ...widget,
            data: {
              ...widget.data,
              values: event.target.value
                .split(",")
                .map((x) => Number(x.trim()))
                .filter((x) => !Number.isNaN(x)),
            },
          })
        }
      />
    </Stack>
  );
}

import { Stack, TextField, Typography } from "@mui/material";

import type { WidgetComponentProps } from "../../engine/plugins/IWidgetPlugin";

import { useDashboardStore } from "../../store/dashboardStore";

export default function KpiPropertyEditor({ widget }: WidgetComponentProps) {
  const updateWidget = useDashboardStore((state) => state.updateWidget);

  const updateProperties = (properties: typeof widget.properties) => {
    updateWidget({
      ...widget,
      properties,
    });
  };

  return (
    <Stack spacing={3}>
      <Typography variant="subtitle1">KPI Properties</Typography>

      <TextField
        label="Title"
        fullWidth
        value={widget.properties.title ?? ""}
        onChange={(event) =>
          updateProperties({
            ...widget.properties,
            title: event.target.value,
          })
        }
      />

      <TextField
        label="Value"
        type="number"
        fullWidth
        value={widget.properties.value ?? 0}
        onChange={(event) =>
          updateProperties({
            ...widget.properties,
            value: Number(event.target.value),
          })
        }
      />

      <TextField
        label="Prefix"
        fullWidth
        value={widget.properties.valuePrefix ?? ""}
        onChange={(event) =>
          updateProperties({
            ...widget.properties,
            valuePrefix: event.target.value,
          })
        }
      />

      <TextField
        label="Suffix"
        fullWidth
        value={widget.properties.valueSuffix ?? ""}
        onChange={(event) =>
          updateProperties({
            ...widget.properties,
            valueSuffix: event.target.value,
          })
        }
      />
    </Stack>
  );
}

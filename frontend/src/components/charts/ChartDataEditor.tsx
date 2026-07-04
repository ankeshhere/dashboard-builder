import { Stack, TextField, Typography } from "@mui/material";

import type { Widget } from "../../types/models/Widget";

import { useDashboardStore } from "../../store/dashboardStore";

import ChartDataTable from "./ChartDataTable";
import { fromRows, toRows } from "../../utils/chartData";
import CsvImportButton from "./CsvImportButton";

interface Props {
  widget: Widget;
  heading: string;
}

export default function ChartDataEditor({ widget, heading }: Props) {
  const updateWidget = useDashboardStore((state) => state.updateWidget);

  const rows = toRows(widget.data.categories ?? [], widget.data.values ?? []);

  return (
    <Stack spacing={3}>
      <Typography variant="subtitle1">{heading}</Typography>

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

      <CsvImportButton
        onImport={(data) =>
          updateWidget({
            ...widget,
            data: {
              ...widget.data,
              ...data,
            },
          })
        }
      />

      <ChartDataTable
        rows={rows}
        onChange={(rows) =>
          updateWidget({
            ...widget,
            data: {
              ...widget.data,
              ...fromRows(rows),
            },
          })
        }
      />
    </Stack>
  );
}

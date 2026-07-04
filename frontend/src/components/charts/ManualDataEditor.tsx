import { Stack, TextField, Typography } from "@mui/material";

import type { Widget } from "../../types/models/Widget";

import { useDashboardStore } from "../../store/dashboardStore";

import ChartDataTable from "./ChartDataTable";
import CsvImportButton from "./CsvImportButton";
import { fromRows, toRows } from "../../utils/chartData";

interface Props {
  widget: Widget;
  heading: string;
}

export default function ManualDataEditor({ widget, heading }: Props) {
  const updateWidgetProperties = useDashboardStore(
    (state) => state.updateWidgetProperties,
  );

  const updateWidgetData = useDashboardStore((state) => state.updateWidgetData);

  const addDataset = useDashboardStore((state) => state.addDataset);

  const rows = toRows(widget.data.categories ?? [], widget.data.values ?? []);

  return (
    <Stack spacing={3}>
      <Typography variant="subtitle1">{heading}</Typography>

      <TextField
        label="Title"
        fullWidth
        value={widget.properties.title ?? ""}
        onChange={(event) =>
          updateWidgetProperties(widget.id, {
            title: event.target.value,
          })
        }
      />

      <CsvImportButton
        onImport={(dataset) => {
          addDataset(dataset);
        }}
      />

      <ChartDataTable
        rows={rows}
        onChange={(rows) =>
          updateWidgetData(widget.id, {
            ...widget.data,
            ...fromRows(rows),
          })
        }
      />
    </Stack>
  );
}

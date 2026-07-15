import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import type { WidgetComponentProps } from "../../engine/plugins/IWidgetPlugin";

import { useDashboardStore } from "../../store/dashboardStore";

import CsvImportButton from "../../components/charts/CsvImportButton";

export default function TablePropertyEditor({ widget }: WidgetComponentProps) {
  const datasets = useDashboardStore((s) => s.datasets);

  const addDataset = useDashboardStore((s) => s.addDataset);

  const updateWidgetProperties = useDashboardStore(
    (s) => s.updateWidgetProperties,
  );

  const updateWidgetDataSource = useDashboardStore(
    (s) => s.updateWidgetDataSource,
  );

  const datasetId = widget.dataSource?.datasetId ?? "";

  const rowsPerPage = widget.properties.rowsPerPage ?? 10;

  return (
    <Stack spacing={3}>
      <Typography variant="subtitle1">Table Properties</Typography>

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

          updateWidgetDataSource(widget.id, {
            type: "csv",
            datasetId: dataset.id,
          });
        }}
      />

      <FormControl fullWidth disabled={datasets.length === 0}>
        <InputLabel>Dataset</InputLabel>

        <Select
          value={datasetId}
          label="Dataset"
          onChange={(event) =>
            updateWidgetDataSource(widget.id, {
              type: "csv",
              datasetId: event.target.value,
            })
          }
        >
          {datasets.map((dataset) => (
            <MenuItem key={dataset.id} value={dataset.id}>
              {dataset.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <TextField
        label="Rows per page"
        type="number"
        fullWidth
        value={rowsPerPage}
        inputProps={{ min: 1 }}
        onChange={(event) => {
          const value = parseInt(event.target.value, 10);

          updateWidgetProperties(widget.id, {
            rowsPerPage: Number.isNaN(value) || value < 1 ? 1 : value,
          });
        }}
      />
    </Stack>
  );
}

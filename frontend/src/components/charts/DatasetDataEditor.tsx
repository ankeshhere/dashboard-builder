import {
  Alert,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";
import { useMemo, useState } from "react";

import type { Widget } from "../../types/models/Widget";
import type {
  AggregationType,
  ChartMapping,
} from "../../types/dashboard/DataSource";

import { useDashboardStore } from "../../store/dashboardStore";
import { DashboardDataController } from "../../engine/dashboard";

interface Props {
  widget: Widget;
}

export default function DatasetDataEditor({ widget }: Props) {
  const datasets = useDashboardStore((s) => s.datasets);

  const updateWidgetData = useDashboardStore((s) => s.updateWidgetData);

  const updateWidgetDataSource = useDashboardStore(
    (s) => s.updateWidgetDataSource,
  );

  const [datasetId, setDatasetId] = useState(
    widget.dataSource?.datasetId ?? "",
  );

  const [categoryField, setCategoryField] = useState(
    widget.dataSource?.mapping?.categoryField ?? "",
  );

  const [valueField, setValueField] = useState(
    widget.dataSource?.mapping?.valueField ?? "",
  );

  const [aggregation, setAggregation] = useState<AggregationType>(
    widget.dataSource?.mapping?.aggregation ?? "sum",
  );

  const dataset = useMemo(
    () => datasets.find((d) => d.id === datasetId),
    [datasets, datasetId],
  );

  const fields = dataset?.fields ?? [];

  function applyBinding(
    nextDatasetId: string,
    nextCategory: string,
    nextValue: string,
    nextAggregation: AggregationType,
  ) {
    if (!nextDatasetId || !nextCategory || !nextValue) {
      return;
    }

    const mapping: ChartMapping = {
      categoryField: nextCategory,
      valueField: nextValue,
      aggregation: nextAggregation,
    };

    const result = DashboardDataController.bindWidget(
      widget,
      nextDatasetId,
      mapping,
      datasets,
    );

    updateWidgetData(widget.id, result.data);

    updateWidgetDataSource(widget.id, result.dataSource);
  }

  if (datasets.length === 0) {
    return (
      <Alert severity="info">Upload a CSV first to create a dataset.</Alert>
    );
  }

  return (
    <Stack spacing={2}>
      <FormControl fullWidth>
        <InputLabel>Dataset</InputLabel>

        <Select
          value={datasetId}
          label="Dataset"
          onChange={(e) => {
            const value = e.target.value;

            setDatasetId(value);

            applyBinding(value, categoryField, valueField, aggregation);
          }}
        >
          {datasets.map((dataset) => (
            <MenuItem key={dataset.id} value={dataset.id}>
              {dataset.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl fullWidth disabled={!dataset}>
        <InputLabel>Category</InputLabel>

        <Select
          value={categoryField}
          label="Category"
          onChange={(e) => {
            const value = e.target.value;

            setCategoryField(value);

            applyBinding(datasetId, value, valueField, aggregation);
          }}
        >
          {fields.map((field) => (
            <MenuItem key={field.id} value={field.name}>
              {field.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl fullWidth disabled={!dataset}>
        <InputLabel>Value</InputLabel>

        <Select
          value={valueField}
          label="Value"
          onChange={(e) => {
            const value = e.target.value;

            setValueField(value);

            applyBinding(datasetId, categoryField, value, aggregation);
          }}
        >
          {fields
            .filter((f) => f.type === "number")
            .map((field) => (
              <MenuItem key={field.id} value={field.name}>
                {field.name}
              </MenuItem>
            ))}
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel>Aggregation</InputLabel>

        <Select
          value={aggregation}
          label="Aggregation"
          onChange={(e) => {
            const value = e.target.value as AggregationType;

            setAggregation(value);

            applyBinding(datasetId, categoryField, valueField, value);
          }}
        >
          <MenuItem value="sum">Sum</MenuItem>
          <MenuItem value="count">Count</MenuItem>
          <MenuItem value="average">Average</MenuItem>
          <MenuItem value="min">Min</MenuItem>
          <MenuItem value="max">Max</MenuItem>
        </Select>
      </FormControl>
    </Stack>
  );
}

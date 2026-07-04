import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
} from "@mui/material";

import type { Widget } from "../../types/models/Widget";

import { useDashboardStore } from "../../store/dashboardStore";

import DatasetDataEditor from "./DatasetDataEditor";
import ManualDataEditor from "./ManualDataEditor";

interface Props {
  widget: Widget;
  heading: string;
}

export default function ChartDataEditor({ widget, heading }: Props) {
  const updateWidgetDataSource = useDashboardStore(
    (s) => s.updateWidgetDataSource,
  );

  const mode = widget.dataSource?.type === "csv" ? "csv" : "manual";

  return (
    <Stack spacing={2}>
      <FormControl>
        <RadioGroup
          row
          value={mode}
          onChange={(e) =>
            updateWidgetDataSource(widget.id, {
              type: e.target.value as "manual" | "csv",
            })
          }
        >
          <FormControlLabel value="manual" control={<Radio />} label="Manual" />

          <FormControlLabel value="csv" control={<Radio />} label="Dataset" />
        </RadioGroup>
      </FormControl>

      {mode === "manual" ? (
        <ManualDataEditor widget={widget} heading={heading} />
      ) : (
        <DatasetDataEditor widget={widget} />
      )}
    </Stack>
  );
}

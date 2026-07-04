import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

import {
  Box,
  Button,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import type { ChartRow } from "../../utils/chartData";

interface Props {
  rows: ChartRow[];
  onChange(rows: ChartRow[]): void;
}

export default function ChartDataTable({ rows, onChange }: Props) {
  function updateCategory(index: number, value: string) {
    const next = [...rows];

    next[index] = {
      ...next[index],
      category: value,
    };

    onChange(next);
  }

  function updateValue(index: number, value: string) {
    const parsed = Number(value);

    const next = [...rows];

    next[index] = {
      ...next[index],
      value: Number.isNaN(parsed) ? 0 : parsed,
    };

    onChange(next);
  }

  function removeRow(index: number) {
    onChange(rows.filter((_, i) => i !== index));
  }

  function addRow() {
    onChange([
      ...rows,
      {
        category: "",
        value: 0,
      },
    ]);
  }

  return (
    <Stack spacing={2}>
      <Typography variant="subtitle2">Data</Typography>

      <Stack spacing={1}>
        {rows.map((row, index) => (
          <Paper
            key={index}
            variant="outlined"
            sx={{
              p: 1,
            }}
          >
            <Stack direction="row" spacing={1} alignItems="center">
              <TextField
                size="small"
                label="Category"
                value={row.category}
                sx={{ flex: 1 }}
                onChange={(event) => updateCategory(index, event.target.value)}
              />

              <TextField
                size="small"
                label="Value"
                value={String(row.value)}
                sx={{
                  width: 110,
                }}
                inputProps={{
                  inputMode: "numeric",
                  style: {
                    textAlign: "right",
                  },
                }}
                onChange={(event) => updateValue(index, event.target.value)}
              />

              <IconButton
                size="small"
                color="error"
                onClick={() => removeRow(index)}
              >
                <DeleteIcon fontSize="small" />
              </IconButton>
            </Stack>
          </Paper>
        ))}
      </Stack>

      <Box>
        <Button variant="outlined" startIcon={<AddIcon />} onClick={addRow}>
          Add Row
        </Button>
      </Box>
    </Stack>
  );
}

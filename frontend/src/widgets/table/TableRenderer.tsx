import { useMemo, useState } from "react";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";

import type { WidgetComponentProps } from "../../engine/plugins/IWidgetPlugin";

import { useDashboardStore } from "../../store/dashboardStore";

const DEFAULT_ROWS_PER_PAGE = 10;

export default function TableRenderer({ widget }: WidgetComponentProps) {
  const datasets = useDashboardStore((s) => s.datasets);

  const updateWidgetProperties = useDashboardStore(
    (s) => s.updateWidgetProperties,
  );

  const [page, setPage] = useState(0);

  const datasetId = widget.dataSource?.datasetId;

  const dataset = useMemo(
    () => datasets.find((d) => d.id === datasetId),
    [datasets, datasetId],
  );

  const rowsPerPage = widget.properties.rowsPerPage ?? DEFAULT_ROWS_PER_PAGE;

  const title = widget.properties.title ?? "Table";

  if (!dataset) {
    return (
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="subtitle1" gutterBottom noWrap>
          {title}
        </Typography>

        <Box
          sx={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="body2" color="text.secondary" textAlign="center">
            Import a CSV and select a dataset in the properties panel.
          </Typography>
        </Box>
      </Box>
    );
  }

  const pageCount = Math.max(1, Math.ceil(dataset.rows.length / rowsPerPage));

  const safePage = Math.min(page, pageCount - 1);

  const start = safePage * rowsPerPage;

  const visibleRows = dataset.rows.slice(start, start + rowsPerPage);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography variant="subtitle1" gutterBottom noWrap>
        {title}
      </Typography>

      <TableContainer
        component={Paper}
        variant="outlined"
        sx={{ flex: 1, minHeight: 0 }}
      >
        <Table stickyHeader size="small">
          <TableHead>
            <TableRow>
              {dataset.fields.map((field) => (
                <TableCell key={field.id}>{field.name}</TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {visibleRows.map((row, index) => (
              <TableRow key={start + index} hover>
                {dataset.fields.map((field) => (
                  <TableCell key={field.id}>
                    {String(row[field.name] ?? "")}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        component="div"
        count={dataset.rows.length}
        page={safePage}
        onPageChange={(_, newPage) => setPage(newPage)}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 25, 50]}
        onRowsPerPageChange={(event) => {
          updateWidgetProperties(widget.id, {
            rowsPerPage: parseInt(event.target.value, 10),
          });

          setPage(0);
        }}
      />
    </Box>
  );
}

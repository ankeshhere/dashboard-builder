import type { ChartData } from "../../types/datasource/ChartData";

import { parseCsv } from "../../utils/csv/parseCsv";

export async function loadChartDataFromCsv(file: File): Promise<ChartData> {
  const csv = await file.text();

  return parseCsv(csv);
}

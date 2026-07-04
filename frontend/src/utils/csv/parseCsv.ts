import Papa from "papaparse";

import type { ChartData } from "../../types/datasource/ChartData";

export function parseCsv(csv: string): ChartData {
  const result = Papa.parse<Record<string, string>>(csv, {
    header: true,
    skipEmptyLines: true,
  });

  if (result.errors.length > 0) {
    throw new Error(result.errors[0].message);
  }

  const categories: string[] = [];
  const values: number[] = [];

  result.data.forEach((row) => {
    const category = row.Category?.trim();

    const value = Number(row.Value);

    if (!category) {
      return;
    }

    if (Number.isNaN(value)) {
      throw new Error(`Invalid numeric value for category '${category}'.`);
    }

    categories.push(category);
    values.push(value);
  });

  return {
    categories,
    values,
  };
}

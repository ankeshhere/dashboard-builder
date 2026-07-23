import Papa from "papaparse";
// util

import type { CsvDocument } from "../../types/datasource/CsvDocument";

export function parseCsv(csv: string): CsvDocument {
  const result = Papa.parse<Record<string, string>>(csv, {
    header: true,
    skipEmptyLines: true,
  });

  if (result.errors.length > 0) {
    throw new Error(result.errors[0].message);
  }

  const headers =
    result.meta.fields?.filter((field) => field.trim().length > 0) ?? [];

  return {
    headers,
    rows: result.data,
  };
}

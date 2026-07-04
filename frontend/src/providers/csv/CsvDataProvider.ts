import type { Dataset } from "../../types/dashboard/Dataset";
import type { CsvDocument } from "../../types/datasource/CsvDocument";

import { parseCsv } from "../../utils/csv/parseCsv";

function inferFieldType(
  rows: Record<string, string>[],
  field: string,
): "string" | "number" {
  for (const row of rows) {
    const value = row[field]?.trim();

    if (!value) {
      continue;
    }

    if (Number.isNaN(Number(value))) {
      return "string";
    }
  }

  return "number";
}

export async function loadDatasetFromCsv(file: File): Promise<Dataset> {
  const csv = await file.text();

  const document: CsvDocument = parseCsv(csv);

  return {
    id: crypto.randomUUID(),

    name: file.name.replace(/\.csv$/i, ""),

    type: "csv",

    createdAt: new Date().toISOString(),

    fields: document.headers.map((header) => ({
      id: header,
      name: header,
      type: inferFieldType(document.rows, header),
    })),

    rows: document.rows.map((row) => {
      const mapped: Record<string, string | number> = {};

      for (const key of document.headers) {
        const value = row[key] ?? "";

        const fieldType = inferFieldType(document.rows, key);

        mapped[key] = fieldType === "number" ? Number(value) : value;
      }

      return mapped;
    }),
  };
}

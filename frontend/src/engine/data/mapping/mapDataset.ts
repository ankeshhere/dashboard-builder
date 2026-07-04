import type { Dataset } from "../../../types/dashboard/Dataset";
import type { ChartMapping } from "../../../types/dashboard/DataSource";
import type { MappedRow } from "../types";

export function mapDataset(
  dataset: Dataset,
  mapping: ChartMapping,
): MappedRow[] {
  return dataset.rows
    .map((row) => {
      const category = row[mapping.categoryField];
      const value = row[mapping.valueField];

      if (category == null || value == null) {
        return null;
      }

      const numericValue = typeof value === "number" ? value : Number(value);

      if (Number.isNaN(numericValue)) {
        return null;
      }

      return {
        category: String(category),
        value: numericValue,
      };
    })
    .filter((row): row is MappedRow => row !== null);
}

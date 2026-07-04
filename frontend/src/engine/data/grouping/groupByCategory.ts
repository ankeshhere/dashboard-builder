import type { CategoryGroup, MappedRow } from "../types";

export function groupByCategory(rows: MappedRow[]): CategoryGroup[] {
  const grouped = new Map<string, number[]>();

  for (const row of rows) {
    const values = grouped.get(row.category);

    if (values) {
      values.push(row.value);
    } else {
      grouped.set(row.category, [row.value]);
    }
  }

  return Array.from(grouped.entries()).map(([category, values]) => ({
    category,
    values,
  }));
}

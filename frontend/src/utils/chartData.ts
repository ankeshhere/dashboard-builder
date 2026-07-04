export interface ChartRow {
  category: string;
  value: number;
}

export function toRows(categories: string[], values: number[]): ChartRow[] {
  const length = Math.max(categories.length, values.length);

  return Array.from({ length }, (_, index) => ({
    category: categories[index] ?? "",
    value: values[index] ?? 0,
  }));
}

export function fromRows(rows: ChartRow[]) {
  return {
    categories: rows.map((r) => r.category),
    values: rows.map((r) => r.value),
  };
}

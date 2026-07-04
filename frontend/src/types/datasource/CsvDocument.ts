export interface CsvDocument {
  headers: string[];

  rows: Record<string, string>[];
}

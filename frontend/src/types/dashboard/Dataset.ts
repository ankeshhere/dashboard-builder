export interface Dataset {
  id: string;

  name: string;

  type: "csv";

  createdAt: string;

  fields: DatasetField[];

  rows: DatasetRow[];
}

export interface DatasetField {
  id: string;

  name: string;

  type: "string" | "number";
}

export type DatasetRow = Record<string, string | number>;

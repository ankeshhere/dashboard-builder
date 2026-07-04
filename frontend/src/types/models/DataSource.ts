export interface DataSource {
  id: string;
  name: string;
  type: "csv" | "api" | "database";
}

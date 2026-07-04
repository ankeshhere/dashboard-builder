export type DataSourceType = "manual" | "csv" | "api" | "database";

export type AggregationType = "sum" | "count" | "average" | "min" | "max";

export interface ChartMapping {
  categoryField: string;
  valueField: string;
  aggregation: AggregationType;
}

export interface WidgetDataSource {
  type: DataSourceType;

  datasetId?: string;

  mapping?: ChartMapping;
}

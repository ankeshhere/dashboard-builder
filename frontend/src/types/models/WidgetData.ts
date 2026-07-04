export interface WidgetData {
  dataSourceId?: string;

  query?: string;

  refreshInterval?: number;

  categories?: string[];

  values?: number[];
}

import type { ChartData } from "../../types/datasource/ChartData";
import type { Dataset } from "../../types/dashboard/Dataset";
import type {
  ChartMapping,
  WidgetDataSource,
} from "../../types/dashboard/DataSource";
import type { Widget } from "../../types/models/Widget";

import { DataSourceService } from "../datasource";

export interface WidgetBindingResult {
  data: ChartData;
  dataSource: WidgetDataSource;
}

export class DashboardDataController {
  static bindWidget(
    widget: Widget,
    datasetId: string,
    mapping: ChartMapping,
    datasets: Dataset[],
  ): WidgetBindingResult {
    const dataSource: WidgetDataSource = {
      type: "csv",
      datasetId,
      mapping,
    };

    const result = DataSourceService.resolve(widget.data, dataSource, datasets);

    return {
      data: result.data,
      dataSource,
    };
  }

  static refreshWidget(widget: Widget, datasets: Dataset[]): ChartData {
    return DataSourceService.resolve(widget.data, widget.dataSource, datasets)
      .data;
  }
}

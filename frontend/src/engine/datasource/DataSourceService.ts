import type { Dataset } from "../../types/dashboard/Dataset";
import type { WidgetDataSource } from "../../types/dashboard/DataSource";

import type { WidgetData } from "../../types/models/WidgetData";
import type { ChartData } from "../../types/datasource/ChartData";

import { transformDataset } from "../data";

const EMPTY_CHART_DATA: ChartData = {
  categories: [],
  values: [],
};

export interface DataResolutionResult {
  data: ChartData;

  dataset?: Dataset;
}

function isChartData(data: WidgetData): data is ChartData {
  return Array.isArray(data.categories) && Array.isArray(data.values);
}

export class DataSourceService {
  static resolve(
    currentData: WidgetData,
    dataSource: WidgetDataSource | undefined,
    datasets: Dataset[],
  ): DataResolutionResult {
    if (!dataSource || dataSource.type === "manual") {
      return {
        data: isChartData(currentData) ? currentData : EMPTY_CHART_DATA,
      };
    }

    if (!dataSource.datasetId || !dataSource.mapping) {
      return {
        data: EMPTY_CHART_DATA,
      };
    }

    const dataset = datasets.find(
      (dataset) => dataset.id === dataSource.datasetId,
    );

    if (!dataset) {
      return {
        data: EMPTY_CHART_DATA,
      };
    }

    return {
      data: transformDataset(dataset, dataSource.mapping),
      dataset,
    };
  }
}

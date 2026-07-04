import type { Dataset } from "../../types/dashboard/Dataset";
import type { ChartMapping } from "../../types/dashboard/DataSource";
import type { ChartData } from "../../types/datasource/ChartData";

import { mapDataset } from "./mapping";
import { groupByCategory } from "./grouping";
import { aggregate } from "./aggregations";

export function transformDataset(
  dataset: Dataset,
  mapping: ChartMapping,
): ChartData {
  const mappedRows = mapDataset(dataset, mapping);

  const groupedRows = groupByCategory(mappedRows);

  return {
    categories: groupedRows.map((group) => group.category),
    values: groupedRows.map((group) =>
      aggregate(mapping.aggregation, group.values),
    ),
  };
}

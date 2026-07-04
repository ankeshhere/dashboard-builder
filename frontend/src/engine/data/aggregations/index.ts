import { average } from "./average";
import { count } from "./count";
import { max } from "./max";
import { min } from "./min";
import { sum } from "./sum";

import type { AggregationType } from "../../../types/dashboard/DataSource";

const aggregators: Record<AggregationType, (values: number[]) => number> = {
  sum,
  count,
  average,
  min,
  max,
};

export function aggregate(
  aggregation: AggregationType,
  values: number[],
): number {
  return aggregators[aggregation](values);
}

export { sum, count, average, min, max };

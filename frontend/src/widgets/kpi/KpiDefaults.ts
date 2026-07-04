import { v4 as uuid } from "uuid";

import type { Widget } from "../../types/models/Widget";

export function createKpiWidget(): Widget {
  return {
    id: uuid(),

    type: "kpi",

    name: "KPI Card",

    layout: {
      x: 0,
      y: 0,
      w: 4,
      h: 3,
    },

    style: {},

    data: {},

    properties: {
      title: "Revenue",
      value: 12.5,
      valuePrefix: "₹",
      valueSuffix: "M",
    },
  };
}

import { v4 as uuid } from "uuid";

import type { Widget } from "../../types/models/Widget";

export function createBarChartWidget(): Widget {
  return {
    id: uuid(),

    type: "bar-chart",

    name: "Bar Chart",

    layout: {
      x: 0,
      y: 0,
      w: 6,
      h: 5,
    },

    style: {},

    data: {
      categories: ["Jan", "Feb", "Mar", "Apr"],
      values: [12, 18, 9, 25],
    },

    properties: {
      title: "Monthly Sales",
    },
  };
}

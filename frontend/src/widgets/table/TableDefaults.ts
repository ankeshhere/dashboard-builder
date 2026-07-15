import { v4 as uuid } from "uuid";

import type { Widget } from "../../types/models/Widget";

export function createTableWidget(): Widget {
  return {
    id: uuid(),

    type: "table",

    name: "Table",

    layout: {
      x: 0,
      y: 0,
      w: 6,
      h: 6,
    },

    style: {},

    data: {},

    properties: {
      title: "Table",
      rowsPerPage: 10,
    },
  };
}

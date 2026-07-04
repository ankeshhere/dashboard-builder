import type { Widget } from "../../types/models/Widget";
import { v4 as uuid } from "uuid";

export function createProgressWidget(): Widget {
  return {
    id: uuid(),

    type: "progress",

    name: "Progress Bar",

    layout: {
      x: 0,
      y: 0,
      w: 4,
      h: 2,
    },

    style: {},

    data: {},

    properties: {
      title: "Progress",
      value: 65,
    },
  };
}
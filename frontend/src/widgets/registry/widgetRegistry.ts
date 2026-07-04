import {
  BarChart3,
  Table2,
  Type,
  Image,
  Filter,
  LayoutGrid
} from "lucide-react";

import type { WidgetDefinition } from "../../types/WidgetDefinition";

export const widgetRegistry: WidgetDefinition[] = [
  {
    id: "line-chart",
    name: "Line Chart",
    description: "Visualize trends",
    icon: BarChart3,
    category: "Charts"
  },
  {
    id: "table",
    name: "Table",
    description: "Display tabular data",
    icon: Table2,
    category: "Tables"
  },
  {
    id: "text",
    name: "Text",
    description: "Display text",
    icon: Type,
    category: "Content"
  },
  {
    id: "image",
    name: "Image",
    description: "Display images",
    icon: Image,
    category: "Content"
  },
  {
    id: "filter",
    name: "Filter",
    description: "Filter dashboard",
    icon: Filter,
    category: "Filters"
  },
  {
    id: "container",
    name: "Container",
    description: "Layout container",
    icon: LayoutGrid,
    category: "Layout"
  }
];
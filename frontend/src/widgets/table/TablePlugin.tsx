import { Table as TableIcon } from "lucide-react";

import type { IWidgetPlugin } from "../../engine/plugins/IWidgetPlugin";

import { createTableWidget } from "./TableDefaults";
import TableRenderer from "./TableRenderer";
import TablePropertyEditor from "./TablePropertyEditor";

export const TablePlugin: IWidgetPlugin = {
  type: "table",

  displayName: "Table",

  category: "Data",

  icon: TableIcon,

  createDefault: createTableWidget,

  renderer: TableRenderer,

  propertyEditor: TablePropertyEditor,
};

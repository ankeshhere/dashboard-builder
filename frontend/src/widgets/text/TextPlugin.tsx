import { Type } from "lucide-react";

import type { IWidgetPlugin } from "../../engine/plugins/IWidgetPlugin";

import { createTextWidget } from "./TextDefaults";
import TextRenderer from "./TextRenderer";
import TextPropertyEditor from "./TextPropertyEditor";

export const TextPlugin: IWidgetPlugin = {
  type: "text",

  displayName: "Text",

  category: "Content",

  icon: Type,

  createDefault: createTextWidget,

  renderer: TextRenderer,

  propertyEditor: TextPropertyEditor,
};

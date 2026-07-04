import type { IWidgetPlugin } from "../../engine/plugins/IWidgetPlugin";
import { createTextWidget } from "./TextDefaults";

export const TextPlugin: IWidgetPlugin = {
  type: "text",

  displayName: "Text",

  category: "Content",

  icon: "text",

  createDefault: createTextWidget,
};
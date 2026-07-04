import { widgetRegistry } from "../registry/WidgetRegistry";

import { TextPlugin } from "../../widgets/text/TextPlugin";
import { ProgressPlugin } from "../../widgets/progress/ProgressPlugin";

widgetRegistry.register(TextPlugin);
widgetRegistry.register(ProgressPlugin);
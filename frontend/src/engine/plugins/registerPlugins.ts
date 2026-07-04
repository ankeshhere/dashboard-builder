import { widgetRegistry } from "../registry/WidgetRegistry";

import { TextPlugin } from "../../widgets/text/TextPlugin";
import { ProgressPlugin } from "../../widgets/progress/ProgressPlugin";
import { KpiPlugin } from "../../widgets/kpi/KpiPlugin";
import { BarChartPlugin } from "../../widgets/bar-chart/BarChartPlugin";

widgetRegistry.register(TextPlugin);
widgetRegistry.register(ProgressPlugin);
widgetRegistry.register(KpiPlugin);
widgetRegistry.register(BarChartPlugin);

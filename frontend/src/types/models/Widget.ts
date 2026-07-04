import type { WidgetLayout } from "./WidgetLayout";
import type { WidgetStyle } from "./WidgetStyle";
import type { WidgetData } from "./WidgetData";
import type { WidgetProperties } from "./WidgetProperties";

export interface Widget {

    id:string;

    type:string;

    name:string;

    layout:WidgetLayout;

    style:WidgetStyle;

    data:WidgetData;

    properties:WidgetProperties;

}
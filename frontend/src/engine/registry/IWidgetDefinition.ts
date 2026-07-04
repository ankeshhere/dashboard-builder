import type { Widget } from "../../types/models/Widget";

export interface IWidgetDefinition {

    type:string;

    displayName:string;

    category:string;

    icon:string;

    create():Widget;

}
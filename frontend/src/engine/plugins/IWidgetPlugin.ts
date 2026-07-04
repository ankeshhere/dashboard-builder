import type { Widget } from "../../types/models/Widget";

export interface IWidgetPlugin {

    type: string;

    displayName: string;

    category: string;

    icon: string;

    createDefault(): Widget;

}
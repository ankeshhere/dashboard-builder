import type { Widget } from "../../types/models/Widget";

export interface WidgetFactory {

    create(type:string):Widget;

}
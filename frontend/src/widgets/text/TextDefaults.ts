import type { Widget } from "../../types/models/Widget";
import { v4 as uuid } from "uuid";

export function createTextWidget(): Widget {

    return {

        id: uuid(),

        type: "text",

        name: "Text",

        layout: {

            x: 0,

            y: 0,

            w: 4,

            h: 3

        },

        style: {},

        data: {},

        properties: {

            title: "Text Widget"

        }

    };

}
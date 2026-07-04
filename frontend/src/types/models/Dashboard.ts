import type { Widget } from "./Widget";
import type { DashboardTheme } from "./Theme";
import type { DashboardFilter } from "./Filter";
import type { DataSource } from "./DataSource";

export interface Dashboard {

    id: string;

    name: string;

    description?: string;

    version: number;

    theme: DashboardTheme;

    dataSources: DataSource[];

    filters: DashboardFilter[];

    widgets: Widget[];

    createdAt: string;

    updatedAt: string;

}
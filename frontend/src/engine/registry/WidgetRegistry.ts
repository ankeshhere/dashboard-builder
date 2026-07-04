import type { IWidgetPlugin } from "../plugins/IWidgetPlugin";

class WidgetRegistry {

    private plugins = new Map<string, IWidgetPlugin>();

    register(plugin: IWidgetPlugin) {
        this.plugins.set(plugin.type, plugin);
    }

    get(type: string) {
        return this.plugins.get(type);
    }

    getAll() {
        return [...this.plugins.values()];
    }
}

export const widgetRegistry = new WidgetRegistry();
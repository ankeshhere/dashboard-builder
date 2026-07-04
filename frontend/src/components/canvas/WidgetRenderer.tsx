import { Alert } from "@mui/material";

import type { Widget } from "../../types/models/Widget";

import { widgetRegistry } from "../../engine/registry/WidgetRegistry";

interface Props {
  widget: Widget;
}

export default function WidgetRenderer({ widget }: Props) {
  const plugin = widgetRegistry.get(widget.type);

  if (!plugin) {
    return (
      <Alert severity="warning">
        Unknown widget type: <strong>{widget.type}</strong>
      </Alert>
    );
  }

  const Renderer = plugin.renderer;

  return <Renderer widget={widget} />;
}

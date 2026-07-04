import type { LucideIcon } from "lucide-react";

export interface WidgetDefinition {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  category: string;
}
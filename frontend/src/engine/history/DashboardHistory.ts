import type { Widget } from "../../types/models/Widget";

export class DashboardHistory {
  private past: Widget[][] = [];
  private future: Widget[][] = [];

  push(current: Widget[]): void {
    this.past.push(structuredClone(current));
    this.future = [];
  }

  undo(current: Widget[]): Widget[] | null {
    const previous = this.past.pop();

    if (!previous) {
      return null;
    }

    this.future.push(structuredClone(current));

    return structuredClone(previous);
  }

  redo(current: Widget[]): Widget[] | null {
    const next = this.future.pop();

    if (!next) {
      return null;
    }

    this.past.push(structuredClone(current));

    return structuredClone(next);
  }

  clear(): void {
    this.past = [];
    this.future = [];
  }

  canUndo(): boolean {
    return this.past.length > 0;
  }

  canRedo(): boolean {
    return this.future.length > 0;
  }
}

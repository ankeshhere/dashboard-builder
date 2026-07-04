export function min(values: number[]): number {
  if (values.length === 0) {
    return 0;
  }

  return Math.min(...values);
}

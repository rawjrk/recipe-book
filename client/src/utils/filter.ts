export function getCurrentFilter(
  filters: Record<string, string>
): { key: string; val: string } | null {
  for (const key in filters) {
    const val = filters[key];

    if (val.length) {
      return { key, val };
    }
  }

  return null;
}

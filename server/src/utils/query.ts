type IQueryParams = Record<string, string | number | boolean>;

export function stringifyQuery(params: IQueryParams) {
  return Object.entries(params)
    .map(([key, val]) => `${key}=${encodeURIComponent(val)}`)
    .join('&');
}

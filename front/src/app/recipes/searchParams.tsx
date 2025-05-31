import { createLoader, parseAsString } from "nuqs/server";

export const coordinatesSearchParams = {
  area: parseAsString.withDefault(""),
  category: parseAsString.withDefault(""),
  ingredient: parseAsString.withDefault(""),
};

export const loadSearchParams = createLoader(coordinatesSearchParams);

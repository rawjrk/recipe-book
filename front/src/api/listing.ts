import { ApiError } from "./utils/error";

const { API_DOMAIN } = process.env;

export async function getCategories(): Promise<string[]> {
  const res = await fetch(`${API_DOMAIN}/categories`);
  const json = await res.json();

  if (!res.ok) {
    throw new ApiError(res.status, json?.message);
  }

  return json;
}

export async function getAreas(): Promise<string[]> {
  const res = await fetch(`${API_DOMAIN}/areas`);
  const json = await res.json();

  if (!res.ok) {
    throw new ApiError(res.status, json?.message);
  }

  return json;
}

export async function getIngredients(): Promise<string[]> {
  const res = await fetch(`${API_DOMAIN}/ingredients`);
  const json = await res.json();

  if (!res.ok) {
    throw new ApiError(res.status, json?.message);
  }

  return json;
}

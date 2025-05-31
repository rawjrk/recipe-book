import { IRecipe, IRecipeInfo } from "./types";

const { API_DOMAIN } = process.env;

export async function getRecipes(): Promise<IRecipe[]> {
  // TODO: add filter options
  const res = await fetch(`${API_DOMAIN}/recipes`);
  const json = await res.json();

  if (!res.ok) {
    throw new ApiError(res.status, json?.message);
  }

  return json;
}

export async function getRecipeInfo(id: number): Promise<IRecipeInfo> {
  const res = await fetch(`${API_DOMAIN}/recipe/${id}`);
  const json = await res.json();

  if (!res.ok) {
    throw new ApiError(res.status, json?.message);
  }

  return json;
}

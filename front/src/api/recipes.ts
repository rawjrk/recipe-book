import { stringifyQuery } from "@/utils/query";
import { IRecipe, IRecipeInfo } from "./types";

const { API_DOMAIN } = process.env;

type IGetRecipesFilters = {
  area: string;
  category: string;
  ingredient: string;
};

export async function getRecipes(
  filters: IGetRecipesFilters
): Promise<IRecipe[]> {
  const query = stringifyQuery(filters);
  const res = await fetch(`${API_DOMAIN}/recipes?${query}`);
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

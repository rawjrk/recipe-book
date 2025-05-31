"use server";

import { getRecipes } from "@/api/recipes";
import RecipesList from "@/components/RecipesList";

export default async function RecipesPage() {
  const recipes = await getRecipes().catch(() => null);

  return <RecipesList data={recipes} />;
}

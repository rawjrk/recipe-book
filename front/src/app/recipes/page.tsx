"use server";

import { getRecipes } from "@/api/recipes";
import RecipesList from "@/components/RecipesList";

export default async function RecipesPage() {
  const recipes = await getRecipes().catch(() => null);

  const areas = await getAreas().catch(() => []);
  const categories = await getCategories().catch(() => []);
  const ingredients = await getIngredients().catch(() => []);

  return (
    <main>
      <RecipeFilters
        categories={categories}
        areas={areas}
        ingredients={ingredients}
      />
      <RecipesList data={recipes} />
    </main>
  );
}

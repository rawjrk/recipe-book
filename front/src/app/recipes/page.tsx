"use server";

import { SearchParams } from "nuqs";
import { getRecipes } from "@/api/recipes";
import { getAreas, getCategories, getIngredients } from "@/api/listing";
import RecipeFilters from "@/components/RecipeFilters";
import RecipesList from "@/components/RecipesList";
import { loadSearchParams } from "./searchParams";

type IRecipesPageProps = {
  searchParams: Promise<SearchParams>;
};

export default async function RecipesPage({ searchParams }: IRecipesPageProps) {
  const filters = await loadSearchParams(searchParams);
  const recipes = await getRecipes(filters).catch(() => null);

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

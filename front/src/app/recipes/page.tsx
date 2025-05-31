"use server";

import { revalidateTag } from "next/cache";
import { SearchParams } from "nuqs";
import { getAreas, getCategories, getIngredients } from "@/api/listing";
import RecipeFilters from "@/components/RecipeFilters";
import RecipesList from "@/components/RecipesList";
import { loadSearchParams } from "./searchParams";
import { Suspense } from "react";

type IRecipesPageProps = {
  searchParams: Promise<SearchParams>;
};

export default async function RecipesPage({ searchParams }: IRecipesPageProps) {
  const filters = await loadSearchParams(searchParams);

  const areas = await getAreas().catch(() => []);
  const categories = await getCategories().catch(() => []);
  const ingredients = await getIngredients().catch(() => []);

  async function refetchRecipes() {
    "use server";
    revalidateTag("recipes");
  }

  return (
    <main>
      <RecipeFilters
        categories={categories}
        areas={areas}
        ingredients={ingredients}
        refetchRecipes={refetchRecipes}
      />
      <Suspense fallback={<div>Loading...</div>}>
        <RecipesList {...filters} />
      </Suspense>
    </main>
  );
}

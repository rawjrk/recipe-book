"use server";

import RecipeCard from "./card";
import { getRecipes } from "@/api/recipes";

type IRecipesListProps = {
  area: string;
  category: string;
  ingredient: string;
};

export default async function RecipesList({
  area,
  category,
  ingredient,
}: IRecipesListProps) {
  const filters = { area, category, ingredient };
  const recipes = await getRecipes(filters).catch(() => null);

  if (!recipes) {
    return null;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 m-4">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} data={recipe} />
      ))}
    </div>
  );
}

"use server";

import { getRecipes } from "@/api/recipes";
import RecipesHeader from "./header";
import RecipeCard from "./card";

export type IRecipesListProps = {
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
    return <div className="m-4">Unable to retrieve the data</div>;
  }

  return (
    <>
      <div className="m-4">
        <RecipesHeader {...filters} />
      </div>
      {!recipes.length ? (
        <div className="m-4">No recipes found...</div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 m-4">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} data={recipe} />
          ))}
        </div>
      )}
    </>
  );
}

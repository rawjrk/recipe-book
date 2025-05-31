import { IRecipe } from "@/api/types";
import RecipeCard from "./card";

type IRecipesListProps = {
  data: IRecipe[] | null;
};

export default function RecipesList({ data: recipes }: IRecipesListProps) {
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

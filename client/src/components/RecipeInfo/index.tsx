"use server";

import { IRecipeInfo } from "@/api/types";
import Link from "next/link";
import Image from "next/image";
import { getRecipes } from "@/api/recipes";

type IRecipeInfoProps = {
  data: IRecipeInfo;
};

export default async function RecipeInfo({ data: recipe }: IRecipeInfoProps) {
  const { category } = recipe;
  const recipiesFromCategory = await getRecipes({ category }).catch(() => []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3">
      <div className="flex flex-col m-4">
        <Image
          src={`${recipe.thumbnail}`}
          alt={recipe.title}
          width={500}
          height={500}
          className="rounded-lg lg:sticky top-0 self-center"
        />
      </div>

      <main className="m-4 flex flex-col">
        <h2 className="text-3xl font-bold mb-2 self-center">{recipe.title}</h2>
        <div className="text-2x1 mb-2 self-center">
          <span className="text-gray-600 dark:text-gray-400 ">Area:</span>{" "}
          <Link href={`/recipes?area=${recipe.area}`}>{recipe.area}</Link>
        </div>

        <h3 className="text-lg font-semibold mb-2">Ingredients</h3>
        <ul className="list-disc list-inside mb-4">
          {recipe.ingredients.map((ing, index) => (
            <li key={index}>
              <Link href={`/recipes?ingredient=${ing.name}`}>{ing.name}</Link>
              <span className="text-gray-600 dark:text-gray-400">
                {" "}
                — {ing.measure}
              </span>
            </li>
          ))}
        </ul>

        <h3 className="text-lg font-semibold mb-2">Instructions</h3>
        <div>
          {recipe.instructions.split("\n").map((line, index) => (
            <p key={index} className="mb-2 indent-2">
              {line}
            </p>
          ))}
        </div>
      </main>

      <Link href={`/recipes?category=${recipe.category}`}>
        <aside className="px-4 py-2 m-4 border-1 border-gray-400 rounded-lg text-gray-600 dark:text-gray-400">
          <h3 className="text-lg font-semibold mb-2">
            Recipes from the same category
          </h3>
          <ul className="list-disc list-inside">
            {recipiesFromCategory.map((r) => (
              <li key={r.id}>{r.title}</li>
            ))}
          </ul>
        </aside>
      </Link>
    </div>
  );
}

import React from "react";
import { IRecipeInfo } from "@/api/types";
import Link from "next/link";
import Image from "next/image";

type IRecipeInfoProps = {
  data: IRecipeInfo;
};

export default function RecipeInfo({ data: recipe }: IRecipeInfoProps) {
  return (
    <div className="rounded-lg shadow-md p-6 max-w-3xl mx-auto">
      <Image
        src={recipe.thumbnail}
        alt={recipe.title}
        width={600}
        height={400}
        className="rounded-md mb-4"
      />
      <h2 className="text-2xl font-bold mb-2">{recipe.title}</h2>
      <div className="text-sm text-gray-400 mb-4">
        <span>
          Area: <Link href={`/recipes?area=${recipe.area}`}>{recipe.area}</Link>
        </span>
      </div>

      <h3 className="text-lg font-semibold mb-2">Instructions</h3>
      <div>
        {recipe.instructions.split("\n").map((line, index) => (
          <p key={index} className="mb-2">
            {line}
          </p>
        ))}
      </div>

      <h3 className="text-lg font-semibold mb-2">Ingredients</h3>
      <ul className="list-disc list-inside mb-4">
        {recipe.ingredients.map((ing, index) => (
          <li key={index}>
            <Link href={`/recipes?ingredient=${ing.name}`}>{ing.name}</Link>
            <span className="text-gray-400"> — {ing.measure}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

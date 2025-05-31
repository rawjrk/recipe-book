"use server";

import Link from "next/link";
import { IRecipe } from "@/api/types";
import Image from "next/image";

type IRecipeCardProps = {
  data: IRecipe;
};

export default async function RecipeCard({ data: recipe }: IRecipeCardProps) {
  return (
    <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <Link href={`/recipe/${recipe.id}`}>
        <Image
          className="rounded-t-lg"
          src={`${recipe.thumbnail}/medium`}
          alt={recipe.title}
          width={350}
          height={350}
        />
      </Link>
      <div className="p-5">
        <Link href={`/recipe/${recipe.id}`}>
          <h5 className="mb-2 text-2x1 font-bold tracking-tight text-gray-900 dark:text-white truncate">
            {recipe.title}
          </h5>
        </Link>
        <Link
          href={`/recipe/${recipe.id}`}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}

"use server";

import { getRecipeInfo } from "@/api/recipes";
import RecipeInfo from "@/components/RecipeInfo";
import { notFound } from "next/navigation";

type RecipeInfoPageProps = {
  params: Promise<{ id: string }>;
};

export default async function RecipeInfoPage({ params }: RecipeInfoPageProps) {
  const { id } = await params;
  const recipeId = Number(id);

  if (Number.isNaN(recipeId) || !Number.isInteger(recipeId)) {
    notFound();
  }

  const recipe = await getRecipeInfo(recipeId).catch(() => null);

  if (!recipe) {
    notFound();
  }

  return <RecipeInfo data={recipe} />;
}

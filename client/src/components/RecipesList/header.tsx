"use server";

import { getCurrentFilter } from "@/utils/filter";
import { IRecipesListProps } from ".";

export default async function RecipesHeader({
  area,
  category,
  ingredient,
}: IRecipesListProps) {
  const currentFilter = getCurrentFilter({ area, category, ingredient });

  if (!currentFilter) {
    return <div>Displaying ALL recipes</div>;
  }

  return (
    <div>
      Displaying recipes filtered by {currentFilter.key} "{currentFilter.val}"
    </div>
  );
}

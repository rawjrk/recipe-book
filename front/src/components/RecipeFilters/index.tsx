"use client";

import { useQueryState } from "nuqs";
import FilterSelect from "./select";

type RecipeFiltersProps = {
  categories: string[];
  areas: string[];
  ingredients: string[];
};

export default function RecipeFilters({
  categories,
  areas,
  ingredients,
}: RecipeFiltersProps) {
  const [area, setArea] = useQueryState("area", {
    defaultValue: "",
  });

  const [category, setCategory] = useQueryState("category", {
    defaultValue: "",
  });

  const [ingredient, setIngredient] = useQueryState("ingredient", {
    defaultValue: "",
  });

  return (
    <div className="m-4 flex flex-col lg:flex-row gap-4">
      <FilterSelect
        defaultTitle="All categories"
        options={categories}
        selected={category}
        onChange={(value) => setCategory(value)}
      />

      <FilterSelect
        defaultTitle="All areas"
        options={areas}
        selected={area}
        onChange={(value) => setArea(value)}
      />

      <FilterSelect
        defaultTitle="All ingredients"
        options={ingredients}
        selected={ingredient}
        onChange={(value) => setIngredient(value)}
      />
    </div>
  );
}

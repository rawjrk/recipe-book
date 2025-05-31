"use client";

import { useQueryState } from "nuqs";
import FilterSelect from "./select";

type RecipeFiltersProps = {
  categories: string[];
  areas: string[];
  ingredients: string[];
  refetchRecipes: () => void;
};

export default function RecipeFilters({
  categories,
  areas,
  ingredients,
  refetchRecipes,
}: RecipeFiltersProps) {
  const [area, setArea] = useQueryState("area", {
    defaultValue: "",
  });

  const handleAreaChange = (value: string) => {
    setArea(value);
    setTimeout(() => {
      refetchRecipes();
    }, 300);
  };

  const [category, setCategory] = useQueryState("category", {
    defaultValue: "",
  });

  const handleCategoryChange = (value: string) => {
    setCategory(value);
    setTimeout(() => {
      refetchRecipes();
    }, 300);
  };

  const [ingredient, setIngredient] = useQueryState("ingredient", {
    defaultValue: "",
  });

  const handleIngredientChange = (value: string) => {
    setIngredient(value);
    setTimeout(() => {
      refetchRecipes();
    }, 300);
  };

  return (
    <div className="m-4 flex flex-col lg:flex-row gap-4">
      <FilterSelect
        defaultTitle="All categories"
        options={categories}
        selected={category}
        onChange={(value) => handleCategoryChange(value)}
        disabled={Boolean(area || ingredient)}
      />

      <FilterSelect
        defaultTitle="All areas"
        options={areas}
        selected={area}
        onChange={(value) => handleAreaChange(value)}
        disabled={Boolean(category || ingredient)}
      />

      <FilterSelect
        defaultTitle="All ingredients"
        options={ingredients}
        selected={ingredient}
        onChange={(value) => handleIngredientChange(value)}
        disabled={Boolean(area || category)}
      />
    </div>
  );
}

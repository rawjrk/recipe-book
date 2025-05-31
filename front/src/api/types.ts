export type IRecipe = {
  id: string;
  title: string;
  thumbnail: string;
};

export type IIngredient = {
  name: string;
  measure: string;
};

export type IRecipeInfo = IRecipe & {
  area: string;
  category: string;
  instructions: string;
  ingredients: IIngredient[];
};

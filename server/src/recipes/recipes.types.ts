export type IIngredient = {
  name: string;
  measure: string;
};

export type IRecipe = {
  id: string;
  title: string;
  thumbnail: string;
  category: string;
  area: string;
  instructions: string;
  ingredients: IIngredient[];
};

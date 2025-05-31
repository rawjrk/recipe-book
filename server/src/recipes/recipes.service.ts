import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { stringifyQuery } from 'src/utils/query';
import { IIngredient, IRecipe, IRecipeInfo } from './recipes.types';

type IFilterOptions = {};

@Injectable()
export class RecipesService {
  private baseUrl: string;

  constructor(private configService: ConfigService) {
    const recipeApiBaseUrl = this.configService.get('recipeApi.baseUrl');

    if (!recipeApiBaseUrl) {
      throw Error('RECIPE_API_BASE_URL variable should be set in .env file!');
    }

    this.baseUrl = recipeApiBaseUrl;
  }

  async fetchMany(options?: IFilterOptions) {
    // TODO: add options handling to apply filters

    const query = stringifyQuery({ s: '' });
    const url = `${this.baseUrl}/search.php?${query}`;

    const res = await fetch(url);
    const json = await res.json(); // TODO: add proper typing

    return json.meals;
  }

  async fetchOne(recipeId: number) {
    const query = stringifyQuery({ i: recipeId });
    const url = `${this.baseUrl}/lookup.php?${query}`;

    const res = await fetch(url);
    const json = await res.json(); // TODO: add proper typing

    if (!json.meals) {
      return null;
    }

    return json.meals.at(0);
  }

  formatMany(rawRecipes: any[]): IRecipe[] {
    // TODO: add proper typing

    return rawRecipes.map((r) => ({
      id: r.idMeal,
      title: r.strMeal,
      thumbnail: r.strMealThumb,
      category: r.strCategory,
      area: r.strArea,
      instructions: r.strInstructions,
      ingredients: this.formatIngredients(r),
    }));
  }

  formatOne(rawRecipe: any): IRecipeInfo {
    // TODO: add proper typing

    const [recipeInfo] = this.formatMany([rawRecipe]);
    return recipeInfo;
  }

  formatIngredients(rawRecipe: any): IIngredient[] {
    // TODO: add proper typing

    const ingredients: IIngredient[] = [];

    for (let i = 1; i <= 20; i++) {
      const name = rawRecipe[`strIngredient${i}`];
      const measure = rawRecipe[`strMeasure${i}`];

      if (!name) {
        break;
      }

      ingredients.push({ name, measure });
    }

    return ingredients;
  }
}

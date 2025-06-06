import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { stringifyQuery } from 'src/utils/query';
import { IIngredient, IRecipe, IRecipeInfo } from './recipes.types';
import { GetRecipesQueryDto } from './dto/get-recipes.dto';

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

  async fetchMany(options: GetRecipesQueryDto) {
    const { area, category, ingredient } = options;

    const query = stringifyQuery({
      a: area || '',
      c: category || '',
      i: ingredient || '',
    });

    const url = query
      ? `${this.baseUrl}/filter.php?${query}`
      : `${this.baseUrl}/search.php?s=`;

    const res = await fetch(url);
    const json = await res.json(); // TODO: add proper typing

    return json?.meals ?? [];
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
    }));
  }

  formatOne(rawRecipe: any): IRecipeInfo {
    // TODO: add proper typing

    return {
      id: rawRecipe.idMeal,
      title: rawRecipe.strMeal,
      thumbnail: rawRecipe.strMealThumb,
      category: rawRecipe.strCategory,
      area: rawRecipe.strArea,
      instructions: rawRecipe.strInstructions,
      ingredients: this.formatIngredients(rawRecipe),
    };
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

import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { stringifyQuery } from 'src/utils/query';

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
}

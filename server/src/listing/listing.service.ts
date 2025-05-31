import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ListingService {
  private baseUrl: string;

  constructor(private configService: ConfigService) {
    const recipeApiBaseUrl = this.configService.get('recipeApi.baseUrl');

    if (!recipeApiBaseUrl) {
      throw Error('RECIPE_API_BASE_URL variable should be set in .env file!');
    }

    this.baseUrl = recipeApiBaseUrl;
  }

  async fetchCategories() {
    const res = await fetch(`${this.baseUrl}/list.php?c=list`);
    const json = await res.json();

    return json.meals;
  }

  formatCategories(rawCategories: any[]): string[] {
    return rawCategories.map((c) => c.strCategory);
  }

  async fetchAreas() {
    const res = await fetch(`${this.baseUrl}/list.php?a=list`);
    const json = await res.json();

    return json.meals;
  }

  formatAreas(rawAreas: any[]): string[] {
    return rawAreas.map((a) => a.strArea);
  }

  async fetchIngredients() {
    const res = await fetch(`${this.baseUrl}/list.php?i=list`);
    const json = await res.json();

    return json.meals;
  }

  formatIngredients(rawIngredients: any[]): string[] {
    return rawIngredients.map((i) => i.strIngredient);
  }
}

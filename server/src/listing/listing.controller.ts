import { Controller, Get } from '@nestjs/common';
import { ListingService } from './listing.service';

@Controller()
export class ListingController {
  constructor(private readonly listingService: ListingService) {}

  @Get('categories')
  async getCategories() {
    const rawCategories = await this.listingService.fetchCategories();
    return this.listingService.formatCategories(rawCategories);
  }

  @Get('areas')
  async getAreas() {
    const rawAreas = await this.listingService.fetchAreas();
    return this.listingService.formatAreas(rawAreas);
  }

  @Get('ingredients')
  async getIngredients() {
    const rawIngredients = await this.listingService.fetchIngredients();
    return this.listingService.formatIngredients(rawIngredients);
  }
}

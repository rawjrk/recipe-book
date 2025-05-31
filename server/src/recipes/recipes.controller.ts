import {
  Controller,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { GetRecipesQueryDto } from './dto/get-recipes.dto';
import { RecipesService } from './recipes.service';

@Controller()
export class RecipesController {
  constructor(private readonly recipesService: RecipesService) {}

  @Get('recipes')
  async getRecipesList(@Query() query: GetRecipesQueryDto) {
    const rawRecipes = await this.recipesService.fetchMany(query);
    return this.recipesService.formatMany(rawRecipes);
  }

  @Get('recipe/:id')
  async getRecipeDetails(@Param('id', ParseIntPipe) id: number) {
    const rawRecipe = await this.recipesService.fetchOne(id);

    if (!rawRecipe) {
      throw new NotFoundException();
    }

    return this.recipesService.formatOne(rawRecipe);
  }
}

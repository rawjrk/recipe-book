import { IsOptional, IsString, MinLength } from 'class-validator';

export class GetRecipesQueryDto {
  @IsString()
  @MinLength(1)
  @IsOptional()
  area?: string;

  @IsString()
  @MinLength(1)
  @IsOptional()
  category?: string;

  @IsString()
  @MinLength(1)
  @IsOptional()
  ingredient?: string;
}

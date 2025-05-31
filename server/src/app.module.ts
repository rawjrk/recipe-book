import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { RecipesModule } from './recipes/recipes.module';
import { ListingModule } from './listing/listing.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    RecipesModule,
    ListingModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

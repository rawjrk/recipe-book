import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ListingController } from './listing.controller';
import { ListingService } from './listing.service';

@Module({
  imports: [ConfigModule],
  controllers: [ListingController],
  providers: [ListingService],
})
export class ListingModule {}

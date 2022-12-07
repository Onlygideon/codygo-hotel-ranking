import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HotelsController } from './hotels.controller.js';
import { HotelsService } from './hotels.service';
import { HotelSchema } from './schemas/hotel.schema.js';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Hotel', schema: HotelSchema }]),
  ],
  controllers: [HotelsController],
  providers: [HotelsService],
})
export class HotelsModule {}

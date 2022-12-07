import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
} from '@nestjs/common';
import { AddHotelDto } from './dto/add-hotel.dto.js';
import { HotelsService } from './hotels.service.js';
import { Hotel } from './interface/hotel.interface.js';

@Controller()
export class HotelsController {
  constructor(private readonly hotelsService: HotelsService) {}

  @Get('hotels')
  allHotels(): Promise<Hotel[]> {
    return this.hotelsService.fetchAllHotels();
  }

  @Get('hotel/:hotelId')
  fetchHotel(@Param('hotelId') hotelId): Promise<Hotel> {
    return this.hotelsService.fetchOneHotel(hotelId);
  }

  @Get('hotel/name-filter/by?')
  filterHotelByName(@Query("name") name: string): Promise<Hotel[]> {
    return this.hotelsService.filterHotelByName(name);
  }

  @Get('hotel/city-filter/by?')
  filterHotelByCity(@Query("city") city: string): Promise<Hotel[]> {
    return this.hotelsService.filterHotelByCity(city);
  }

  @Get('hotel/country-filter/by?')
  filterHotelByCountry(@Query("country") country: string): Promise<Hotel[]> {
    return this.hotelsService.filterHotelByCountry(country);
  }

  @Post('hotel')
  addHotel(@Body() addHotelDto: AddHotelDto): Promise<Hotel> {
    return this.hotelsService.create(addHotelDto);
  }

  @Put('hotel/:hotelId')
  updateHotel(
    @Body() updateHotelDto: AddHotelDto,
    @Param('hotelId') hotelId,
  ): Promise<Hotel> {
    return this.hotelsService.updateHotel(hotelId, updateHotelDto);
  }

  @Delete('hotel/:hotelId')
  deleteHotel(@Param('hotelId') hotelId): string {
    this.hotelsService.deleteHotel(hotelId);
    return `Hotel with the id of ${hotelId} has been deleted`;
  }
}

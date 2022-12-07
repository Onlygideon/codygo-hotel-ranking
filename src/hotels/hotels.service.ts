import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Hotel } from './interface/hotel.interface.js';
import {
  setNameFilter,
  setCityFilter,
  setCountryFilter,
} from './utils/aggregation-stage.js';

@Injectable()
export class HotelsService {
  constructor(
    @InjectModel('Hotel') private readonly hotelModel: Model<Hotel>,
  ) {}

  async fetchAllHotels(): Promise<Hotel[]> {
    return await this.hotelModel.find({});
  }

  async fetchOneHotel(id: string): Promise<Hotel> {
    return await this.hotelModel.findOne({ _id: id });
  }

  async filterHotelByName(name: string): Promise<Hotel[]> {
    return await this.hotelModel.aggregate([
      ...(name ? [setNameFilter(name)] : []),
    ]);
  }

  async filterHotelByCity(city: string): Promise<Hotel[]> {
    return await this.hotelModel.aggregate([
      ...(city ? [setCityFilter(city)] : []),
    ]);
  }

  async filterHotelByCountry(country: string): Promise<Hotel[]> {
    return await this.hotelModel.aggregate([
      ...(country ? [setCountryFilter(country)] : []),
    ]);
  }

  async create(hotel: Hotel): Promise<Hotel> {
    const newHotel = new this.hotelModel(hotel);
    newHotel.name = newHotel.name.toLowerCase();
    newHotel.city = newHotel.city.toLowerCase();
    newHotel.country = newHotel.country.toLowerCase();
    newHotel.address = newHotel.address.toLowerCase();
    return await newHotel.save();
  }

  async updateHotel(id: string, hotel: Hotel): Promise<Hotel> {
    return await this.hotelModel.findByIdAndUpdate(id, hotel, {
      new: true,
      upsert: true,
    });
  }

  async deleteHotel(id: string): Promise<string> {
    return await this.hotelModel.findByIdAndRemove(id);
  }
}

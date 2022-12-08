import { Model } from 'mongoose';
import { Hotel } from './interface/hotel.interface.js';
export declare class HotelsService {
    private readonly hotelModel;
    constructor(hotelModel: Model<Hotel>);
    fetchAllHotels(): Promise<Hotel[]>;
    fetchOneHotel(id: string): Promise<Hotel>;
    filterHotelByName(name: string): Promise<Hotel[]>;
    filterHotelByCity(city: string): Promise<Hotel[]>;
    filterHotelByCountry(country: string): Promise<Hotel[]>;
    create(hotel: Hotel): Promise<Hotel>;
    updateHotel(id: string, hotel: Hotel): Promise<Hotel>;
    deleteHotel(id: string): Promise<string>;
}

import { AddHotelDto } from './dto/add-hotel.dto.js';
import { HotelsService } from './hotels.service.js';
import { Hotel } from './interface/hotel.interface.js';
export declare class HotelsController {
    private readonly hotelsService;
    constructor(hotelsService: HotelsService);
    allHotels(): Promise<Hotel[]>;
    fetchHotel(hotelId: any): Promise<Hotel>;
    filterHotelByName(name: string): Promise<Hotel[]>;
    filterHotelByCity(city: string): Promise<Hotel[]>;
    filterHotelByCountry(country: string): Promise<Hotel[]>;
    addHotel(addHotelDto: AddHotelDto): Promise<Hotel>;
    updateHotel(updateHotelDto: AddHotelDto, hotelId: any): Promise<Hotel>;
    deleteHotel(hotelId: any): string;
}

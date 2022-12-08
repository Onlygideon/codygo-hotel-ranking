import * as mongoose from 'mongoose';
export declare const HotelSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    name: string;
    country: string;
    address: string;
    city?: string;
}>;

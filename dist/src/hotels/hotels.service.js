"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const aggregation_stage_js_1 = require("./utils/aggregation-stage.js");
let HotelsService = class HotelsService {
    constructor(hotelModel) {
        this.hotelModel = hotelModel;
    }
    async fetchAllHotels() {
        return await this.hotelModel.find({});
    }
    async fetchOneHotel(id) {
        return await this.hotelModel.findOne({ _id: id });
    }
    async filterHotelByName(name) {
        return await this.hotelModel.aggregate([
            ...(name ? [(0, aggregation_stage_js_1.setNameFilter)(name)] : []),
        ]);
    }
    async filterHotelByCity(city) {
        return await this.hotelModel.aggregate([
            ...(city ? [(0, aggregation_stage_js_1.setCityFilter)(city)] : []),
        ]);
    }
    async filterHotelByCountry(country) {
        return await this.hotelModel.aggregate([
            ...(country ? [(0, aggregation_stage_js_1.setCountryFilter)(country)] : []),
        ]);
    }
    async create(hotel) {
        const newHotel = new this.hotelModel(hotel);
        newHotel.name = newHotel.name.toLowerCase();
        newHotel.city = newHotel.city.toLowerCase();
        newHotel.country = newHotel.country.toLowerCase();
        newHotel.address = newHotel.address.toLowerCase();
        return await newHotel.save();
    }
    async updateHotel(id, hotel) {
        return await this.hotelModel.findByIdAndUpdate(id, hotel, {
            new: true,
            upsert: true,
        });
    }
    async deleteHotel(id) {
        return await this.hotelModel.findByIdAndRemove(id);
    }
};
HotelsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)('Hotel')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], HotelsService);
exports.HotelsService = HotelsService;
//# sourceMappingURL=hotels.service.js.map
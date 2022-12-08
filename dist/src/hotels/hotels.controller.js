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
exports.HotelsController = void 0;
const common_1 = require("@nestjs/common");
const add_hotel_dto_js_1 = require("./dto/add-hotel.dto.js");
const hotels_service_js_1 = require("./hotels.service.js");
let HotelsController = class HotelsController {
    constructor(hotelsService) {
        this.hotelsService = hotelsService;
    }
    allHotels() {
        return this.hotelsService.fetchAllHotels();
    }
    fetchHotel(hotelId) {
        return this.hotelsService.fetchOneHotel(hotelId);
    }
    filterHotelByName(name) {
        return this.hotelsService.filterHotelByName(name);
    }
    filterHotelByCity(city) {
        return this.hotelsService.filterHotelByCity(city);
    }
    filterHotelByCountry(country) {
        return this.hotelsService.filterHotelByCountry(country);
    }
    addHotel(addHotelDto) {
        return this.hotelsService.create(addHotelDto);
    }
    updateHotel(updateHotelDto, hotelId) {
        return this.hotelsService.updateHotel(hotelId, updateHotelDto);
    }
    deleteHotel(hotelId) {
        this.hotelsService.deleteHotel(hotelId);
        return `Hotel with the id of ${hotelId} has been deleted`;
    }
};
__decorate([
    (0, common_1.Get)('hotels'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HotelsController.prototype, "allHotels", null);
__decorate([
    (0, common_1.Get)('hotel/:hotelId'),
    __param(0, (0, common_1.Param)('hotelId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], HotelsController.prototype, "fetchHotel", null);
__decorate([
    (0, common_1.Get)('hotel/name-filter/by?'),
    __param(0, (0, common_1.Query)("name")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], HotelsController.prototype, "filterHotelByName", null);
__decorate([
    (0, common_1.Get)('hotel/city-filter/by?'),
    __param(0, (0, common_1.Query)("city")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], HotelsController.prototype, "filterHotelByCity", null);
__decorate([
    (0, common_1.Get)('hotel/country-filter/by?'),
    __param(0, (0, common_1.Query)("country")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], HotelsController.prototype, "filterHotelByCountry", null);
__decorate([
    (0, common_1.Post)('hotel'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [add_hotel_dto_js_1.AddHotelDto]),
    __metadata("design:returntype", Promise)
], HotelsController.prototype, "addHotel", null);
__decorate([
    (0, common_1.Put)('hotel/:hotelId'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('hotelId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [add_hotel_dto_js_1.AddHotelDto, Object]),
    __metadata("design:returntype", Promise)
], HotelsController.prototype, "updateHotel", null);
__decorate([
    (0, common_1.Delete)('hotel/:hotelId'),
    __param(0, (0, common_1.Param)('hotelId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], HotelsController.prototype, "deleteHotel", null);
HotelsController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [hotels_service_js_1.HotelsService])
], HotelsController);
exports.HotelsController = HotelsController;
//# sourceMappingURL=hotels.controller.js.map
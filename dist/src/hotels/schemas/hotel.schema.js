"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelSchema = void 0;
const mongoose = require("mongoose");
exports.HotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    city: {
        type: String,
        required: 'City is required',
    },
    country: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
}, { timestamps: true, collection: 'Hotels Collection' });
//# sourceMappingURL=hotel.schema.js.map
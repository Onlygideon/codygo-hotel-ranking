import * as mongoose from 'mongoose';

export const HotelSchema = new mongoose.Schema(
  {
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
  },
  { timestamps: true, collection: 'Hotels Collection' },
);

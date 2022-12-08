"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setCountryFilter = exports.setCityFilter = exports.setNameFilter = void 0;
const setNameFilter = (name) => {
    return { $match: { name: { $regex: name.toLowerCase() } } };
};
exports.setNameFilter = setNameFilter;
const setCityFilter = (city) => {
    return { $match: { city: { $regex: city.toLowerCase() } } };
};
exports.setCityFilter = setCityFilter;
const setCountryFilter = (country) => {
    return { $match: { country: { $regex: country.toLowerCase() } } };
};
exports.setCountryFilter = setCountryFilter;
//# sourceMappingURL=aggregation-stage.js.map
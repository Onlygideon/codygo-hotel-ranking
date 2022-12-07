export const setNameFilter = (name: string) => {
  return { $match: { name: { $regex: name.toLowerCase() } } };
};

export const setCityFilter = (city: string) => {
  return { $match: { city: { $regex: city.toLowerCase() } } };
};

export const setCountryFilter = (country: string) => {
  return { $match: { country: { $regex: country.toLowerCase() } } };
};

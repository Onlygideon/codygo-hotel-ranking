export declare const setNameFilter: (name: string) => {
    $match: {
        name: {
            $regex: string;
        };
    };
};
export declare const setCityFilter: (city: string) => {
    $match: {
        city: {
            $regex: string;
        };
    };
};
export declare const setCountryFilter: (country: string) => {
    $match: {
        country: {
            $regex: string;
        };
    };
};

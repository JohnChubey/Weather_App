export const successCode = {status: 200};
export const lastRefresh = {
    cityName: "",
    time: "",
}
export const recentCityTestData = {
    name: "Edmonton",
    temp: "-2",
    desc: "Clear",
    recentCityClick: () => {},
    removeCity: () => {},
    idx: 0,
}

export const halifaxApiCall = {
    "coord": {"lon": -63.57, "lat": 44.65},
    "weather": [{"id": 804, "main": "Clouds", "description": "overcast clouds", "icon": "04d"}],
    "base": "stations",
    "main": {
        "temp": 8.29,
        "feels_like": 7.2,
        "temp_min": 7.78,
        "temp_max": 9,
        "pressure": 1008,
        "humidity": 100,
        "sea_level": 1008,
        "grnd_level": 1008
    },
    "visibility": 10000,
    "wind": {"speed": 1, "deg": 280},
    "clouds": {"all": 100},
    "dt": 1606582546,
    "sys": {"type": 1, "id": 682, "country": "CA", "sunrise": 1606562903, "sunset": 1606595812},
    "timezone": -14400,
    "id": 6324729,
    "name": "Halifax",
    "cod": 200
};
export const halifaxDailyForecast = {
    "city": {
        "id": 6324729,
        "name": "Halifax",
        "coord": {"lon": -63.5724, "lat": 44.6453},
        "country": "CA",
        "population": 359111,
        "timezone": -14400
    },
    "cod": "200",
    "message": 0.1263355,
    "cnt": 5,
    "list": [{
        "dt": 1606579200,
        "sunrise": 1606562902,
        "sunset": 1606595813,
        "temp": {"day": 9.17, "min": 5.98, "max": 9.99, "night": 5.98, "eve": 7.67, "morn": 8.34},
        "feels_like": {"day": 7.32, "night": 1.17, "eve": 4, "morn": 7.16},
        "pressure": 1009,
        "humidity": 89,
        "weather": [{"id": 500, "main": "Rain", "description": "light rain", "icon": "10d"}],
        "speed": 1.79,
        "deg": 218,
        "clouds": 100,
        "pop": 0.36,
        "rain": 0.1
    }, {
        "dt": 1606665600,
        "sunrise": 1606649373,
        "sunset": 1606682185,
        "temp": {"day": 5.85, "min": 2.69, "max": 6.14, "night": 2.69, "eve": 3.5, "morn": 3.56},
        "feels_like": {"day": 0.27, "night": -0.78, "eve": -0.61, "morn": -0.83},
        "pressure": 1015,
        "humidity": 67,
        "weather": [{"id": 800, "main": "Clear", "description": "sky is clear", "icon": "01d"}],
        "speed": 5.17,
        "deg": 288,
        "clouds": 6,
        "pop": 0
    }, {
        "dt": 1606752000,
        "sunrise": 1606735842,
        "sunset": 1606768560,
        "temp": {"day": 9.13, "min": 2.72, "max": 9.68, "night": 9.34, "eve": 8.36, "morn": 3.43},
        "feels_like": {"day": 4.75, "night": 3.44, "eve": 3.84, "morn": 0.4},
        "pressure": 1026,
        "humidity": 78,
        "weather": [{"id": 804, "main": "Clouds", "description": "overcast clouds", "icon": "04d"}],
        "speed": 4.8,
        "deg": 183,
        "clouds": 100,
        "pop": 0
    }, {
        "dt": 1606838400,
        "sunrise": 1606822310,
        "sunset": 1606854937,
        "temp": {"day": 10.8, "min": 10.01, "max": 12.64, "night": 12.64, "eve": 11.65, "morn": 10.32},
        "feels_like": {"day": 4.05, "night": 6.11, "eve": 5.3, "morn": 3.21},
        "pressure": 1022,
        "humidity": 90,
        "weather": [{"id": 501, "main": "Rain", "description": "moderate rain", "icon": "10d"}],
        "speed": 9.41,
        "deg": 145,
        "clouds": 100,
        "pop": 1,
        "rain": 14.13
    }, {
        "dt": 1606924800,
        "sunrise": 1606908776,
        "sunset": 1606941316,
        "temp": {"day": 11.57, "min": 7.83, "max": 13.42, "night": 7.83, "eve": 8.79, "morn": 13.42},
        "feels_like": {"day": 8.24, "night": 4.02, "eve": 4.68, "morn": 8.43},
        "pressure": 1014,
        "humidity": 73,
        "weather": [{"id": 501, "main": "Rain", "description": "moderate rain", "icon": "10d"}],
        "speed": 3.72,
        "deg": 235,
        "clouds": 93,
        "pop": 1,
        "rain": 22.7
    }]
};

export const edmontonApiCall = {
    "coord": {"lon": -113.47, "lat": 53.55},
    "weather": [{"id": 800, "main": "Clear", "description": "clear sky", "icon": "01d"}],
    "base": "stations",
    "main": {
        "temp": -2.25,
        "feels_like": -7.61,
        "temp_min": -3.33,
        "temp_max": -1.11,
        "pressure": 1020,
        "humidity": 68,
        "sea_level": 1020,
        "grnd_level": 944
    },
    "visibility": 2040,
    "wind": {"speed": 3.6, "deg": 300},
    "clouds": {"all": 0},
    "dt": 1606589100,
    "sys": {"type": 1, "id": 642, "country": "CA", "sunrise": 1606577022, "sunset": 1606605651},
    "timezone": -25200,
    "id": 5946768,
    "name": "Edmonton",
    "cod": 200
};
export const edmontonDailyForecast = {
    "city": {
        "id": 5946768,
        "name": "Edmonton",
        "coord": {"lon": -113.4687, "lat": 53.5501},
        "country": "CA",
        "population": 712391,
        "timezone": -25200
    },
    "cod": "200",
    "message": 7.1201168,
    "cnt": 5,
    "list": [{
        "dt": 1606590000,
        "sunrise": 1606577022,
        "sunset": 1606605650,
        "temp": {"day": -2.67, "min": -7.98, "max": -2.12, "night": -7.98, "eve": -6.31, "morn": -4.65},
        "feels_like": {"day": -8.02, "night": -13.5, "eve": -11.32, "morn": -9.73},
        "pressure": 1020,
        "humidity": 82,
        "weather": [{"id": 600, "main": "Snow", "description": "light snow", "icon": "13d"}],
        "speed": 3.87,
        "deg": 296,
        "clouds": 50,
        "pop": 0.75,
        "snow": 0.53
    }, {
        "dt": 1606676400,
        "sunrise": 1606663515,
        "sunset": 1606691999,
        "temp": {"day": -2.64, "min": -7.74, "max": -0.89, "night": -2.83, "eve": -2.38, "morn": -7.15},
        "feels_like": {"day": -7.06, "night": -7.84, "eve": -7.08, "morn": -12.96},
        "pressure": 1017,
        "humidity": 93,
        "weather": [{"id": 804, "main": "Clouds", "description": "overcast clouds", "icon": "04d"}],
        "speed": 2.81,
        "deg": 214,
        "clouds": 100,
        "pop": 0
    }, {
        "dt": 1606762800,
        "sunrise": 1606750007,
        "sunset": 1606778351,
        "temp": {"day": 2.06, "min": -3.17, "max": 2.06, "night": -2.57, "eve": 1.4, "morn": -2.8},
        "feels_like": {"day": -2.56, "night": -12.04, "eve": -8.16, "morn": -7.66},
        "pressure": 994,
        "humidity": 85,
        "weather": [{"id": 600, "main": "Snow", "description": "light snow", "icon": "13d"}],
        "speed": 3.73,
        "deg": 225,
        "clouds": 42,
        "pop": 0.2,
        "snow": 0.35
    }, {
        "dt": 1606849200,
        "sunrise": 1606836497,
        "sunset": 1606864706,
        "temp": {"day": -2.09, "min": -4.4, "max": -1.09, "night": -4.03, "eve": -3.43, "morn": -3.37},
        "feels_like": {"day": -9.15, "night": -8.63, "eve": -8.7, "morn": -12.13},
        "pressure": 1024,
        "humidity": 91,
        "weather": [{"id": 800, "main": "Clear", "description": "sky is clear", "icon": "01d"}],
        "speed": 6.62,
        "deg": 300,
        "clouds": 0,
        "pop": 0
    }, {
        "dt": 1606935600,
        "sunrise": 1606922984,
        "sunset": 1606951065,
        "temp": {"day": 0.27, "min": -3.71, "max": 2.19, "night": 0.4, "eve": 1.25, "morn": -2.9},
        "feels_like": {"day": -3.88, "night": -3.97, "eve": -2.6, "morn": -7.21},
        "pressure": 1030,
        "humidity": 93,
        "weather": [{"id": 800, "main": "Clear", "description": "sky is clear", "icon": "01d"}],
        "speed": 2.95,
        "deg": 203,
        "clouds": 0,
        "pop": 0
    }]
};

export const newYorkApiCall = {
    "coord": {"lon": -74.01, "lat": 40.71},
    "weather": [{"id": 804, "main": "Clouds", "description": "overcast clouds", "icon": "04d"}],
    "base": "stations",
    "main": {"temp": 12.57, "feels_like": 7.75, "temp_min": 11.67, "temp_max": 13.33, "pressure": 1015, "humidity": 50},
    "visibility": 10000,
    "wind": {"speed": 4.6, "deg": 260, "gust": 7.2},
    "clouds": {"all": 90},
    "dt": 1606588839,
    "sys": {"type": 1, "id": 4610, "country": "US", "sunrise": 1606564699, "sunset": 1606599028},
    "timezone": -18000,
    "id": 5128581,
    "name": "New York",
    "cod": 200
};
export const newYorkDailyForecast = {
    "city": {
        "id": 5128581,
        "name": "New York",
        "coord": {"lon": -74.006, "lat": 40.7143},
        "country": "US",
        "population": 8175133,
        "timezone": -18000
    },
    "cod": "200",
    "message": 0.0989183,
    "cnt": 5,
    "list": [{
        "dt": 1606579200,
        "sunrise": 1606564699,
        "sunset": 1606599027,
        "temp": {"day": 12.04, "min": 7.36, "max": 12.68, "night": 7.36, "eve": 11.4, "morn": 10.09},
        "feels_like": {"day": 8.11, "night": 1.73, "eve": 5.52, "morn": 6.82},
        "pressure": 1015,
        "humidity": 54,
        "weather": [{"id": 803, "main": "Clouds", "description": "broken clouds", "icon": "04d"}],
        "speed": 3.48,
        "deg": 271,
        "clouds": 60,
        "pop": 0.04
    }, {
        "dt": 1606665600,
        "sunrise": 1606651162,
        "sunset": 1606685406,
        "temp": {"day": 8.8, "min": 5.96, "max": 11.49, "night": 9.27, "eve": 10.73, "morn": 6.45},
        "feels_like": {"day": 4.82, "night": 5.18, "eve": 6.74, "morn": 2.37},
        "pressure": 1021,
        "humidity": 51,
        "weather": [{"id": 800, "main": "Clear", "description": "sky is clear", "icon": "01d"}],
        "speed": 2.69,
        "deg": 253,
        "clouds": 0,
        "pop": 0
    }, {
        "dt": 1606752000,
        "sunrise": 1606737624,
        "sunset": 1606771787,
        "temp": {"day": 13.21, "min": 9.16, "max": 15.91, "night": 14.1, "eve": 15.41, "morn": 10.45},
        "feels_like": {"day": 9, "night": 12.34, "eve": 8.05, "morn": 7.17},
        "pressure": 1011,
        "humidity": 77,
        "weather": [{"id": 501, "main": "Rain", "description": "moderate rain", "icon": "10d"}],
        "speed": 5.8,
        "deg": 109,
        "clouds": 100,
        "pop": 1,
        "rain": 17.05
    }, {
        "dt": 1606838400,
        "sunrise": 1606824085,
        "sunset": 1606858171,
        "temp": {"day": 11.97, "min": 6.14, "max": 12.3, "night": 6.14, "eve": 9.14, "morn": 11.02},
        "feels_like": {"day": 10.37, "night": -1.74, "eve": 1.19, "morn": 9.63},
        "pressure": 996,
        "humidity": 81,
        "weather": [{"id": 500, "main": "Rain", "description": "light rain", "icon": "10d"}],
        "speed": 1.91,
        "deg": 51,
        "clouds": 94,
        "pop": 0.99,
        "rain": 1.73
    }, {
        "dt": 1606924800,
        "sunrise": 1606910545,
        "sunset": 1606944557,
        "temp": {"day": 4.75, "min": 3.96, "max": 6.69, "night": 6.29, "eve": 6.45, "morn": 3.96},
        "feels_like": {"day": -2.94, "night": -1.03, "eve": -0.6, "morn": -3.48},
        "pressure": 1014,
        "humidity": 66,
        "weather": [{"id": 800, "main": "Clear", "description": "sky is clear", "icon": "01d"}],
        "speed": 7.94,
        "deg": 245,
        "clouds": 0,
        "pop": 0
    }]
};

export const vancouverApiCall = {
    "coord": {"lon": -123.12, "lat": 49.25},
    "weather": [{"id": 801, "main": "Clouds", "description": "few clouds", "icon": "02d"}],
    "base": "stations",
    "main": {"temp": 7.53, "feels_like": 4.34, "temp_min": 6, "temp_max": 8.89, "pressure": 1027, "humidity": 87},
    "visibility": 10000,
    "wind": {"speed": 3.1, "deg": 290},
    "clouds": {"all": 20},
    "dt": 1606589233,
    "sys": {"type": 1, "id": 954, "country": "CA", "sunrise": 1606578194, "sunset": 1606609111},
    "timezone": -28800,
    "id": 6173331,
    "name": "Vancouver",
    "cod": 200
};
export const vancouverDailyForecast = {
    "city": {
        "id": 6173331,
        "name": "Vancouver",
        "coord": {"lon": -123.1193, "lat": 49.2497},
        "country": "CA",
        "population": 1837969,
        "timezone": -28800
    },
    "cod": "200",
    "message": 0.0800419,
    "cnt": 5,
    "list": [{
        "dt": 1606593600,
        "sunrise": 1606578194,
        "sunset": 1606609111,
        "temp": {"day": 7.58, "min": 5.05, "max": 7.85, "night": 5.05, "eve": 5.77, "morn": 5.95},
        "feels_like": {"day": 5.58, "night": 1.97, "eve": 3.45, "morn": 3.02},
        "pressure": 1028,
        "humidity": 81,
        "weather": [{"id": 803, "main": "Clouds", "description": "broken clouds", "icon": "04d"}],
        "speed": 1.12,
        "deg": 255,
        "clouds": 51,
        "pop": 0.5
    }, {
        "dt": 1606680000,
        "sunrise": 1606664675,
        "sunset": 1606695473,
        "temp": {"day": 6.61, "min": 3.73, "max": 7.02, "night": 7.02, "eve": 6.77, "morn": 3.92},
        "feels_like": {"day": 3.73, "night": 2.81, "eve": 4.76, "morn": 1.01},
        "pressure": 1022,
        "humidity": 64,
        "weather": [{"id": 500, "main": "Rain", "description": "light rain", "icon": "10d"}],
        "speed": 1.34,
        "deg": 150,
        "clouds": 25,
        "pop": 0.84,
        "rain": 2.25
    }, {
        "dt": 1606766400,
        "sunrise": 1606751154,
        "sunset": 1606781838,
        "temp": {"day": 8.27, "min": 4.27, "max": 8.27, "night": 4.27, "eve": 6.14, "morn": 7.84},
        "feels_like": {"day": 2.45, "night": 1.21, "eve": 1.54, "morn": 0.31},
        "pressure": 1021,
        "humidity": 67,
        "weather": [{"id": 502, "main": "Rain", "description": "heavy intensity rain", "icon": "10d"}],
        "speed": 6.05,
        "deg": 269,
        "clouds": 0,
        "pop": 1,
        "rain": 10.3
    }, {
        "dt": 1606852800,
        "sunrise": 1606837631,
        "sunset": 1606868205,
        "temp": {"day": 6, "min": 2.52, "max": 6, "night": 3.42, "eve": 3.95, "morn": 2.52},
        "feels_like": {"day": 2.99, "night": 0.4, "eve": 0.4, "morn": -0.67},
        "pressure": 1035,
        "humidity": 64,
        "weather": [{"id": 800, "main": "Clear", "description": "sky is clear", "icon": "01d"}],
        "speed": 1.41,
        "deg": 266,
        "clouds": 0,
        "pop": 0
    }, {
        "dt": 1606939200,
        "sunrise": 1606924107,
        "sunset": 1606954576,
        "temp": {"day": 6.49, "min": 3.04, "max": 6.49, "night": 4.91, "eve": 5.31, "morn": 3.04},
        "feels_like": {"day": 3.45, "night": 1.98, "eve": 2.73, "morn": 0.69},
        "pressure": 1025,
        "humidity": 63,
        "weather": [{"id": 800, "main": "Clear", "description": "sky is clear", "icon": "01d"}],
        "speed": 1.5,
        "deg": 273,
        "clouds": 0,
        "pop": 0
    }]
};

export const torontoApiCall = {
    "coord": {"lon": -79.42, "lat": 43.7},
    "weather": [{"id": 800, "main": "Clear", "description": "clear sky", "icon": "01d"}],
    "base": "stations",
    "main": {
        "temp": 7.02,
        "feels_like": 0.79,
        "temp_min": 6.67,
        "temp_max": 7.22,
        "pressure": 1017,
        "humidity": 45,
        "sea_level": 1017,
        "grnd_level": 996
    },
    "visibility": 10000,
    "wind": {"speed": 5.31, "deg": 248},
    "clouds": {"all": 9},
    "dt": 1606588986,
    "sys": {"type": 1, "id": 718, "country": "CA", "sunrise": 1606566529, "sunset": 1606599796},
    "timezone": -18000,
    "id": 6167865,
    "name": "Toronto",
    "cod": 200
};
export const torontoDailyForecast = {
    "city": {
        "id": 6167865,
        "name": "Toronto",
        "coord": {"lon": -79.4163, "lat": 43.7001},
        "country": "CA",
        "population": 4612191,
        "timezone": -18000
    },
    "cod": "200",
    "message": 0.0541324,
    "cnt": 5,
    "list": [{
        "dt": 1606582800,
        "sunrise": 1606566528,
        "sunset": 1606599795,
        "temp": {"day": 5.38, "min": 3.1, "max": 7.15, "night": 3.95, "eve": 4.84, "morn": 3.33},
        "feels_like": {"day": -0.14, "night": -1.66, "eve": -0.77, "morn": -1.45},
        "pressure": 1017,
        "humidity": 65,
        "weather": [{"id": 500, "main": "Rain", "description": "light rain", "icon": "10d"}],
        "speed": 4.91,
        "deg": 266,
        "clouds": 0,
        "pop": 0.42,
        "rain": 0.13
    }, {
        "dt": 1606669200,
        "sunrise": 1606652996,
        "sunset": 1606686169,
        "temp": {"day": 6.91, "min": 2.91, "max": 8.61, "night": 5.46, "eve": 6.84, "morn": 3.02},
        "feels_like": {"day": 1.65, "night": 2.1, "eve": 2.22, "morn": -1.52},
        "pressure": 1015,
        "humidity": 62,
        "weather": [{"id": 800, "main": "Clear", "description": "sky is clear", "icon": "01d"}],
        "speed": 4.71,
        "deg": 225,
        "clouds": 0,
        "pop": 0
    }, {
        "dt": 1606755600,
        "sunrise": 1606739464,
        "sunset": 1606772545,
        "temp": {"day": 5.05, "min": 4.33, "max": 5.45, "night": 4.91, "eve": 5.18, "morn": 4.49},
        "feels_like": {"day": 0.89, "night": -0.32, "eve": 0.12, "morn": 1.91},
        "pressure": 1005,
        "humidity": 87,
        "weather": [{"id": 501, "main": "Rain", "description": "moderate rain", "icon": "10d"}],
        "speed": 3.82,
        "deg": 36,
        "clouds": 100,
        "pop": 1,
        "rain": 12.92
    }, {
        "dt": 1606842000,
        "sunrise": 1606825930,
        "sunset": 1606858924,
        "temp": {"day": 1.52, "min": 1.22, "max": 4.07, "night": 1.79, "eve": 1.6, "morn": 1.57},
        "feels_like": {"day": -3.41, "night": -5.05, "eve": -3.33, "morn": -4.8},
        "pressure": 997,
        "humidity": 92,
        "weather": [{"id": 500, "main": "Rain", "description": "light rain", "icon": "10d"}],
        "speed": 4.29,
        "deg": 318,
        "clouds": 100,
        "pop": 1,
        "rain": 5.92
    }, {
        "dt": 1606928400,
        "sunrise": 1606912395,
        "sunset": 1606945305,
        "temp": {"day": 3.18, "min": 2.2, "max": 3.18, "night": 2.54, "eve": 2.6, "morn": 2.2},
        "feels_like": {"day": -4.85, "night": -3.73, "eve": -4.18, "morn": -5.78},
        "pressure": 1006,
        "humidity": 77,
        "weather": [{"id": 600, "main": "Snow", "description": "light snow", "icon": "13d"}],
        "speed": 8.54,
        "deg": 249,
        "clouds": 100,
        "pop": 0.65,
        "snow": 1.05
    }]
};

export const honoluluApiCall = {
    "coord": {"lon": -157.86, "lat": 21.31},
    "weather": [{"id": 801, "main": "Clouds", "description": "few clouds", "icon": "02d"}],
    "base": "stations",
    "main": {"temp": 24.08, "feels_like": 23.48, "temp_min": 22.78, "temp_max": 26, "pressure": 1017, "humidity": 60},
    "visibility": 10000,
    "wind": {"speed": 3.6, "deg": 360},
    "clouds": {"all": 20},
    "dt": 1606589628,
    "sys": {"type": 1, "id": 7878, "country": "US", "sunrise": 1606582277, "sunset": 1606621708},
    "timezone": -36000,
    "id": 5856195,
    "name": "Honolulu",
    "cod": 200
};
export const honoluluDailyForecast = {
    "city": {
        "id": 5856195,
        "name": "Honolulu",
        "coord": {"lon": -157.8583, "lat": 21.3069},
        "country": "US",
        "population": 371657,
        "timezone": -36000
    },
    "cod": "200",
    "message": 0.1113451,
    "cnt": 5,
    "list": [{
        "dt": 1606600800,
        "sunrise": 1606582276,
        "sunset": 1606621708,
        "temp": {"day": 24.67, "min": 22.29, "max": 24.73, "night": 23.36, "eve": 23.57, "morn": 22.45},
        "feels_like": {"day": 22.5, "night": 21.96, "eve": 22.02, "morn": 21.01},
        "pressure": 1017,
        "humidity": 65,
        "weather": [{"id": 500, "main": "Rain", "description": "light rain", "icon": "10d"}],
        "speed": 6.88,
        "deg": 36,
        "clouds": 2,
        "pop": 0.34,
        "rain": 0.24
    }, {
        "dt": 1606687200,
        "sunrise": 1606668715,
        "sunset": 1606708111,
        "temp": {"day": 24.9, "min": 22.74, "max": 24.91, "night": 22.74, "eve": 23.46, "morn": 22.79},
        "feels_like": {"day": 22.52, "night": 20.24, "eve": 21.33, "morn": 21.54},
        "pressure": 1018,
        "humidity": 68,
        "weather": [{"id": 500, "main": "Rain", "description": "light rain", "icon": "10d"}],
        "speed": 7.75,
        "deg": 63,
        "clouds": 3,
        "pop": 0.41,
        "rain": 0.39
    }, {
        "dt": 1606773600,
        "sunrise": 1606755155,
        "sunset": 1606794516,
        "temp": {"day": 24.66, "min": 22.51, "max": 24.86, "night": 22.79, "eve": 24.34, "morn": 22.51},
        "feels_like": {"day": 24.07, "night": 23.56, "eve": 24.77, "morn": 21.22},
        "pressure": 1017,
        "humidity": 60,
        "weather": [{"id": 800, "main": "Clear", "description": "sky is clear", "icon": "01d"}],
        "speed": 3.89,
        "deg": 64,
        "clouds": 8,
        "pop": 0.12
    }, {
        "dt": 1606860000,
        "sunrise": 1606841594,
        "sunset": 1606880922,
        "temp": {"day": 24.48, "min": 21.85, "max": 24.74, "night": 23.01, "eve": 24.09, "morn": 21.85},
        "feels_like": {"day": 24.78, "night": 22.71, "eve": 24.45, "morn": 23.05},
        "pressure": 1017,
        "humidity": 57,
        "weather": [{"id": 800, "main": "Clear", "description": "sky is clear", "icon": "01d"}],
        "speed": 2.09,
        "deg": 50,
        "clouds": 1,
        "pop": 0
    }, {
        "dt": 1606946400,
        "sunrise": 1606928033,
        "sunset": 1606967329,
        "temp": {"day": 24.82, "min": 22.42, "max": 25.06, "night": 23.17, "eve": 24.58, "morn": 22.42},
        "feels_like": {"day": 24.51, "night": 24.63, "eve": 25.38, "morn": 22.53},
        "pressure": 1017,
        "humidity": 63,
        "weather": [{"id": 801, "main": "Clouds", "description": "few clouds", "icon": "02d"}],
        "speed": 4.01,
        "deg": 94,
        "clouds": 13,
        "pop": 0.17
    }]
};

export const parisApiCall = {
    "coord": {"lon": 2.35, "lat": 48.85},
    "weather": [{"id": 800, "main": "Clear", "description": "clear sky", "icon": "01n"}],
    "base": "stations",
    "main": {"temp": 7.11, "feels_like": 2.93, "temp_min": 6, "temp_max": 7.78, "pressure": 1017, "humidity": 81},
    "visibility": 10000,
    "wind": {"speed": 4.1, "deg": 40},
    "clouds": {"all": 0},
    "dt": 1606589393,
    "sys": {"type": 1, "id": 6550, "country": "FR", "sunrise": 1606547959, "sunset": 1606579106},
    "timezone": 3600,
    "id": 2988507,
    "name": "Paris",
    "cod": 200
};
export const parisDailyForecast = {
    "city": {
        "id": 2988507,
        "name": "Paris",
        "coord": {"lon": 2.3488, "lat": 48.8534},
        "country": "FR",
        "population": 2138551,
        "timezone": 3600
    },
    "cod": "200",
    "message": 0.0781864,
    "cnt": 5,
    "list": [{
        "dt": 1606561200,
        "sunrise": 1606547960,
        "sunset": 1606579106,
        "temp": {"day": 9.5, "min": 6.34, "max": 11.23, "night": 6.95, "eve": 8.76, "morn": 6.58},
        "feels_like": {"day": 5.77, "night": 2.93, "eve": 4.76, "morn": 3.87},
        "pressure": 1017,
        "humidity": 53,
        "weather": [{"id": 800, "main": "Clear", "description": "sky is clear", "icon": "01d"}],
        "speed": 2.57,
        "deg": 80,
        "clouds": 0,
        "pop": 0
    }, {
        "dt": 1606647600,
        "sunrise": 1606634441,
        "sunset": 1606665468,
        "temp": {"day": 7.29, "min": 4.61, "max": 8.99, "night": 4.61, "eve": 6.98, "morn": 5.09},
        "feels_like": {"day": 3.49, "night": 1.73, "eve": 3.08, "morn": 1.2},
        "pressure": 1023,
        "humidity": 59,
        "weather": [{"id": 800, "main": "Clear", "description": "sky is clear", "icon": "01d"}],
        "speed": 2.56,
        "deg": 50,
        "clouds": 6,
        "pop": 0
    }, {
        "dt": 1606734000,
        "sunrise": 1606720919,
        "sunset": 1606751832,
        "temp": {"day": 5.83, "min": 2.55, "max": 8.08, "night": 8.08, "eve": 7.09, "morn": 2.75},
        "feels_like": {"day": 3.3, "night": 4.9, "eve": 3.61, "morn": 0.15},
        "pressure": 1028,
        "humidity": 63,
        "weather": [{"id": 500, "main": "Rain", "description": "light rain", "icon": "10d"}],
        "speed": 0.64,
        "deg": 248,
        "clouds": 0,
        "pop": 0.29,
        "rain": 0.27
    }, {
        "dt": 1606820400,
        "sunrise": 1606807396,
        "sunset": 1606838200,
        "temp": {"day": 9.41, "min": 7.07, "max": 9.49, "night": 7.07, "eve": 7.71, "morn": 9.49},
        "feels_like": {"day": 3.9, "night": 1.78, "eve": 2.4, "morn": 6.54},
        "pressure": 1021,
        "humidity": 57,
        "weather": [{"id": 500, "main": "Rain", "description": "light rain", "icon": "10d"}],
        "speed": 5.32,
        "deg": 343,
        "clouds": 84,
        "pop": 0.82,
        "rain": 1.32
    }, {
        "dt": 1606906800,
        "sunrise": 1606893871,
        "sunset": 1606924570,
        "temp": {"day": 7.52, "min": 6.57, "max": 7.55, "night": 7.15, "eve": 7.41, "morn": 6.79},
        "feels_like": {"day": 4.35, "night": 5.16, "eve": 5.88, "morn": 2.85},
        "pressure": 1021,
        "humidity": 76,
        "weather": [{"id": 500, "main": "Rain", "description": "light rain", "icon": "10d"}],
        "speed": 2.53,
        "deg": 9,
        "clouds": 100,
        "pop": 0.2,
        "rain": 0.17
    }]
};

export const berlinApiCall = {
    "coord": {"lon": 13.41, "lat": 52.52},
    "weather": [{"id": 803, "main": "Clouds", "description": "broken clouds", "icon": "04n"}],
    "base": "stations",
    "main": {"temp": 3.82, "feels_like": 0.47, "temp_min": 2.78, "temp_max": 4.44, "pressure": 1026, "humidity": 80},
    "visibility": 10000,
    "wind": {"speed": 2.1, "deg": 20},
    "clouds": {"all": 75},
    "dt": 1606589664,
    "sys": {"type": 1, "id": 1262, "country": "DE", "sunrise": 1606546239, "sunset": 1606575516},
    "timezone": 3600,
    "id": 2950159,
    "name": "Berlin",
    "cod": 200
};
export const berlinDailyForecast = {
    "city": {
        "id": 2950159,
        "name": "Berlin",
        "coord": {"lon": 13.4105, "lat": 52.5244},
        "country": "DE",
        "population": 1000000,
        "timezone": 3600
    },
    "cod": "200",
    "message": 4.762881,
    "cnt": 5,
    "list": [{
        "dt": 1606557600,
        "sunrise": 1606546240,
        "sunset": 1606575515,
        "temp": {"day": 3.87, "min": 1.16, "max": 4.99, "night": 1.44, "eve": 4.23, "morn": 1.63},
        "feels_like": {"day": 0.76, "night": -1.91, "eve": 1.11, "morn": -1.08},
        "pressure": 1025,
        "humidity": 80,
        "weather": [{"id": 800, "main": "Clear", "description": "sky is clear", "icon": "01d"}],
        "speed": 1.77,
        "deg": 51,
        "clouds": 0,
        "pop": 0
    }, {
        "dt": 1606644000,
        "sunrise": 1606632731,
        "sunset": 1606661866,
        "temp": {"day": 4.67, "min": 0.75, "max": 5.51, "night": 0.75, "eve": 2.97, "morn": 2.23},
        "feels_like": {"day": 0.62, "night": -2.85, "eve": -1.04, "morn": -1.06},
        "pressure": 1025,
        "humidity": 81,
        "weather": [{"id": 803, "main": "Clouds", "description": "broken clouds", "icon": "04d"}],
        "speed": 3.32,
        "deg": 352,
        "clouds": 83,
        "pop": 0.07
    }, {
        "dt": 1606730400,
        "sunrise": 1606719220,
        "sunset": 1606748221,
        "temp": {"day": 2.68, "min": 0, "max": 2.91, "night": 0.92, "eve": 2.57, "morn": 0},
        "feels_like": {"day": -1.34, "night": -3.45, "eve": -1.45, "morn": -3.63},
        "pressure": 1025,
        "humidity": 79,
        "weather": [{"id": 804, "main": "Clouds", "description": "overcast clouds", "icon": "04d"}],
        "speed": 2.79,
        "deg": 265,
        "clouds": 100,
        "pop": 0
    }, {
        "dt": 1606816800,
        "sunrise": 1606805707,
        "sunset": 1606834578,
        "temp": {"day": 1.06, "min": 0.24, "max": 2.99, "night": 0.24, "eve": 2.22, "morn": 0.5},
        "feels_like": {"day": -2.85, "night": -3.48, "eve": -1.36, "morn": -3.92},
        "pressure": 1018,
        "humidity": 89,
        "weather": [{"id": 804, "main": "Clouds", "description": "overcast clouds", "icon": "04d"}],
        "speed": 2.63,
        "deg": 161,
        "clouds": 97,
        "pop": 0
    }, {
        "dt": 1606903200,
        "sunrise": 1606892192,
        "sunset": 1606920939,
        "temp": {"day": 0.13, "min": -0.95, "max": 2.02, "night": -0.95, "eve": 0.54, "morn": -0.64},
        "feels_like": {"day": -3.35, "night": -3.98, "eve": -2.65, "morn": -4.16},
        "pressure": 1022,
        "humidity": 92,
        "weather": [{"id": 800, "main": "Clear", "description": "sky is clear", "icon": "01d"}],
        "speed": 1.93,
        "deg": 107,
        "clouds": 0,
        "pop": 0
    }]
};

export const frederictonApiCall = {
    "coord": {"lon": -66.67, "lat": 45.95},
    "weather": [{"id": 804, "main": "Clouds", "description": "overcast clouds", "icon": "04d"}],
    "base": "stations",
    "main": {"temp": 4.76, "feels_like": 1.64, "temp_min": 4.44, "temp_max": 5, "pressure": 1011, "humidity": 80},
    "visibility": 10000,
    "wind": {"speed": 1.98, "deg": 289},
    "clouds": {"all": 90},
    "dt": 1606589924,
    "sys": {"type": 1, "id": 798, "country": "CA", "sunrise": 1606563907, "sunset": 1606596296},
    "timezone": -14400,
    "id": 5957776,
    "name": "Fredericton",
    "cod": 200
};
export const frederictonDailyForecast = {
    "city": {
        "id": 5957776,
        "name": "Fredericton",
        "coord": {"lon": -66.6656, "lat": 45.9454},
        "country": "CA",
        "population": 52337,
        "timezone": -14400
    },
    "cod": "200",
    "message": 0.1452947,
    "cnt": 5,
    "list": [{
        "dt": 1606579200,
        "sunrise": 1606563905,
        "sunset": 1606596296,
        "temp": {"day": 5.11, "min": 0.81, "max": 5.78, "night": 1.43, "eve": 2.07, "morn": 1.88},
        "feels_like": {"day": 1.97, "night": -1.32, "eve": -0.54, "morn": -0.96},
        "pressure": 1011,
        "humidity": 71,
        "weather": [{"id": 802, "main": "Clouds", "description": "scattered clouds", "icon": "03d"}],
        "speed": 1.71,
        "deg": 309,
        "clouds": 30,
        "pop": 0.02
    }, {
        "dt": 1606665600,
        "sunrise": 1606650378,
        "sunset": 1606682666,
        "temp": {"day": 3.66, "min": -0.57, "max": 4.48, "night": 1.21, "eve": 0.78, "morn": 1.44},
        "feels_like": {"day": -1.04, "night": -1.85, "eve": -2.5, "morn": -2.92},
        "pressure": 1015,
        "humidity": 74,
        "weather": [{"id": 800, "main": "Clear", "description": "sky is clear", "icon": "01d"}],
        "speed": 3.77,
        "deg": 285,
        "clouds": 0,
        "pop": 0
    }, {
        "dt": 1606752000,
        "sunrise": 1606736849,
        "sunset": 1606769037,
        "temp": {"day": 6.75, "min": -0.02, "max": 8.59, "night": 8.5, "eve": 7.37, "morn": 0.17},
        "feels_like": {"day": 2.9, "night": 4.78, "eve": 4.69, "morn": -2.96},
        "pressure": 1022,
        "humidity": 85,
        "weather": [{"id": 500, "main": "Rain", "description": "light rain", "icon": "10d"}],
        "speed": 3.72,
        "deg": 165,
        "clouds": 96,
        "pop": 0.41,
        "rain": 0.67
    }, {
        "dt": 1606838400,
        "sunrise": 1606823320,
        "sunset": 1606855412,
        "temp": {"day": 13.8, "min": 9.85, "max": 14.2, "night": 14.2, "eve": 13.53, "morn": 11.7},
        "feels_like": {"day": 10.53, "night": 12.31, "eve": 10.01, "morn": 6.93},
        "pressure": 1011,
        "humidity": 93,
        "weather": [{"id": 502, "main": "Rain", "description": "heavy intensity rain", "icon": "10d"}],
        "speed": 5.86,
        "deg": 163,
        "clouds": 100,
        "pop": 1,
        "rain": 63.63
    }, {
        "dt": 1606924800,
        "sunrise": 1606909789,
        "sunset": 1606941789,
        "temp": {"day": 9.04, "min": 4.02, "max": 13.53, "night": 4.02, "eve": 5.76, "morn": 10.85},
        "feels_like": {"day": 3.71, "night": 0.18, "eve": 1.77, "morn": 8.68},
        "pressure": 1010,
        "humidity": 70,
        "weather": [{"id": 501, "main": "Rain", "description": "moderate rain", "icon": "10d"}],
        "speed": 5.7,
        "deg": 205,
        "clouds": 64,
        "pop": 1,
        "rain": 13.18
    }]
};

export const invalidApiCall ={"cod":"404","message":"city not found"};


export const REQUEST_NEW_WEATHER_DATA = "REQUEST_NEW_WEATHER_DATA";

export const refreshWeatherData = (data) => {
    return {
        type: REQUEST_NEW_WEATHER_DATA,
        payload: data,
    }
}

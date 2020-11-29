export const UPDATE_WEATHER_DATA = "UPDATE_WEATHER_DATA";

export const updateWeatherData = (data) => {
    return {
        type: UPDATE_WEATHER_DATA,
        payload: data,
    }
}

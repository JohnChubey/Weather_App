import React from 'react';
import sunny from "../Utilities/Icons/amcharts_weather_icons_1.0.0/animated/day.svg";
import cloudy from "../Utilities/Icons/amcharts_weather_icons_1.0.0/animated/cloudy.svg";
import partly_cloudy from "../Utilities/Icons/amcharts_weather_icons_1.0.0/animated/cloudy-day-1.svg";
import showers from "../Utilities/Icons/amcharts_weather_icons_1.0.0/animated/rainy-6.svg";
import rainy from "../Utilities/Icons/amcharts_weather_icons_1.0.0/animated/rainy-1.svg";
import thunderstorm from "../Utilities/Icons/amcharts_weather_icons_1.0.0/animated/thunder.svg";
import snow from "../Utilities/Icons/amcharts_weather_icons_1.0.0/animated/snowy-6.svg";

export const getWeatherIcon = (code) => {
    let num = code.substr(0, 2);
    switch (num) {
        case "01":
            return sunny;
        case "03":
            return cloudy;
        case "02":
        case "04":
            return partly_cloudy;
        case "09":
            return showers;
        case "10":
            return rainy;
        case "11":
            return thunderstorm;
        case "13":
            return snow;
    }
}

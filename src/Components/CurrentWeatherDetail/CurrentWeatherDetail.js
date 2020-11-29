import React from 'react';
import "./CurrentWeatherDetail.scss";
import {getWeatherIcon} from "../../Utilities/utilityFunctions";

const CurrentWeatherDetail = (props) => {

    return (
        <div className="CurrentWeatherDetail">
            <div id={"CurrentWeatherImageDiv"}>
                <img id={"CurrentWeatherImage"} src={getWeatherIcon(props.weatherCode)} alt=""/>
            </div>
            <div id={"CurrentWeatherInfoDiv"}>
                <p>{props.temp}&deg;C</p>
                <p>{props.conditions}</p>
                <p>Wind: {props.windSpeed} m/s  {props.windDir}&deg;</p>
                <p>Pressure: {props.pressure}</p>
            </div>
        </div>
    );
}

export {CurrentWeatherDetail};

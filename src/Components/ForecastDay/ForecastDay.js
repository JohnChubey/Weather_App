import React from 'react';
import "./ForecastDay.scss";
import {getWeatherIcon} from "../../Utilities/utilityFunctions";

const ForecastDay = (props) => {
    return (
        <div className="ForecastDay">
            <p>{props.dayNum}</p>
            <p>{props.dayAbrev}</p>
            <img id={"ForecastDayImg"} src={getWeatherIcon(props.iconCode)} alt=""/>
            <p>{props.temp}&deg;C</p>
        </div>
    );
}

export {ForecastDay};

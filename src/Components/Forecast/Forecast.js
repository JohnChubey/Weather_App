import React, {useEffect, useState} from 'react';
import "./Forecast.scss";
import {API_KEY} from "../../Utilities/Constants";
import {ForecastDay} from "../ForecastDay/ForecastDay";
import moment from "moment";

const Forecast = (props) => {
    const [forecasts, setForecasts] = useState([]);
    useEffect(() => {
        fetch("http://api.openweathermap.org/data/2.5/forecast/daily?q=" + props.cityName + "&cnt=6&appid=" + API_KEY + "&units=metric")
            .then(result => result.json())
            .then(res => {
                setForecasts(res.list);
            })
    }, [props.cityName])

    function getForecastDays(){
        if(forecasts.length > 0){
            return forecasts.map((forecast, idx) => {
                if(idx !== 0){
                    return <ForecastDay temp={Math.round(forecast.temp.day)}
                                        dayNum={moment().add(idx, "d").format("D")}
                                        dayAbrev={moment().add(idx, "d").format("ddd")}
                                        iconCode={forecast.weather[0].icon} key={idx} />
                }
                else {
                    return null;
                }
            })
        } else{
            return <p>N/A</p>
        }
    }

    return (
        <div className="Forecast">
            <div id={"ForecastDaysDiv"}>
                {getForecastDays()}
            </div>
        </div>
    );
}

export {Forecast};

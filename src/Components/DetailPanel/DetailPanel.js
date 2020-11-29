import React from 'react';
import "./DetailPanel.scss";
import {Forecast} from "../Forecast/Forecast";
import {CurrentWeatherDetail} from "../CurrentWeatherDetail/CurrentWeatherDetail";
import moment from "moment";
import {FaSyncAlt} from "react-icons/all";

const DetailPanel = (props) => {
    function getWeatherDetails() {
        if (props.searchPanel.base) {
            return <div id={"weatherDetailDiv"}>
                <CurrentWeatherDetail temp={Math.round(props.searchPanel.main.temp)} conditions={props.searchPanel.weather[0].main}
                                      windSpeed={props.searchPanel.wind.speed} windDir={props.searchPanel.wind.deg}
                                      pressure={props.searchPanel.main.pressure}
                                      weatherCode={props.searchPanel.weather[0].icon}/>
                <Forecast cityName={props.searchPanel.name}/>
            </div>
        } else {
            return <div id={"weatherDetailDiv"}>
                <p id={"noWeatherMessage"}>No weather to show. Please enter a city name in the top left box.</p>
            </div>
        }
    }

    function refreshButtonClicked(){
        let refreshData = {
            cityName: props.searchPanel.name,
            time:moment().format(),
        }
        props.refreshWeatherData(refreshData);
    }

    return (
        <div className="DetailPanel">
            <div id={"TitleHeaderDiv"}>
                <div id={"TitleDiv"}>
                    <h2>{props.searchPanel.name}</h2>
                </div>
                <div id={"DetailRefreshDiv"}>
                    <button id={"detailRefreshButton"} onClick={refreshButtonClicked}><FaSyncAlt /></button>
                </div>
            </div>
            {getWeatherDetails()}
        </div>
    );
}

export {DetailPanel};

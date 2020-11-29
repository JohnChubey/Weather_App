import React, {useEffect, useState} from 'react';
import {API_KEY} from "../../Utilities/Constants";
import "./RecentCity.scss";
import {FaSyncAlt, FaTimes} from "react-icons/all";

const RecentCity = (props) => {
    const [refreshToggle, setRefreshToggle] = useState(true);
    const [weatherData, setWeatherData] = useState(null);
    useEffect(() => {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + props.name + "&appid=" + API_KEY + "&units=metric")
            .then(result => result.json())
            .then(res => setWeatherData(weatherData => res))
    }, [refreshToggle])

    const [refreshedInComponent, setRefreshedInComponent] = useState(false);
    function getWeatherData(){
        if(refreshedInComponent){
            setRefreshedInComponent(refreshedInComponent => false);
            return <button className={"recentCityButton"} onClick={() => props.recentCityClick(props.name)}>
                {props.name} - {Math.round(weatherData.main.temp)}&deg;C {weatherData.weather[0].main}</button>
        } else{
            return <button className={"recentCityButton"} onClick={() => props.recentCityClick(props.name)}>
                {props.name} - {Math.round(props.temp)}&deg;C {props.desc}</button>
        }
    }

    function refreshClicked(){
        setRefreshToggle(refreshToggle => !refreshToggle);
        setRefreshedInComponent(refreshedInComponent => true);
    }

    return (
        <div className="RecentCity">
            <div className={"recentCityDescription"}>
                {getWeatherData()}
            </div>
            <div className={"recentCityButtons"}>
                <button className={"recentCityRefreshButton"} data-testid={"recentCityRefreshButtonTestID"} onClick={refreshClicked}><FaSyncAlt /></button>
                <button className={"recentCityRemoveCityButton"} onClick={() => props.removeCity(props.idx)}><FaTimes /></button>
            </div>
        </div>
    );
}

export {RecentCity};

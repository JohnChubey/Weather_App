import React, {useEffect} from 'react';
import {useState} from "react";
import {RecentCity} from "../RecentCity/RecentCity";
import {API_KEY, NOT_A_CITY} from "../../Utilities/Constants";
import {Error} from "../Error/Error";
import "./SearchPanel.scss";
import {FaPlus} from "react-icons/all";

const SearchPanel = (props) => {
    const [searchBar, setSearchBar] = useState("");
    function handleSearchBarChange(e) {
        setSearchBar(e.target.value);
    }

    const [previousSearches, setPreviousSearches] = useState([]);
    function getRecentCities(){
        if(previousSearches.length > 0){
            return previousSearches.map((search, idx) => {
                return <RecentCity key={idx} recentCityClick={recentCityClick} removeCity={removeCity} idx={idx} name={search.name} temp={search.temperature} desc={search.description}/>
            })
        } else{
            return <p> No previous cities</p>
        }
    }

    function removeCity(index){
        if(previousSearches.length > 0 && index < previousSearches.length){
            let newPreviousSearches = [...previousSearches];
            newPreviousSearches.splice(index, 1);
            setPreviousSearches(previousSearches => newPreviousSearches);
        }
    }

    const [lastQuery, setLastQuery] = useState(NOT_A_CITY);
    const [queryData, setQueryData] = useState(null);
    const [showError, setShowError] = useState(false);
    useEffect(() => {
        if (lastQuery !== "") {
            fetch("https://api.openweathermap.org/data/2.5/weather?q=" + lastQuery + "&appid=" + API_KEY + "&units=metric")
                .then(result => result.json())
                .then(res => {
                    if (res.coord) {
                        if (!fromDetailPage) {
                            setQueryData(queryData => res);
                            setSearchBar(searchBar => "");
                            setShowError(showError => false);
                        }
                        props.updateWeatherData(res);
                        setLastQuery(lastQuery => "");
                        setFromDetailPage(fromDetailPage => false);
                        setRecentCityClicked(recentCityClicked => false);
                    } else {
                        if (res.cod !== "400") {
                            setShowError(showError => true);
                        }
                        setQueryData(queryData => null);
                    }
                })
        }
    }, [lastQuery])

    const [fromDetailPage, setFromDetailPage] = useState(false);
    useEffect(() => {
        if(props.lastDetailRefresh.time !== ""){
            setLastQuery(lastQuery => props.lastDetailRefresh.cityName);
            setFromDetailPage(fromDetailPage => true);
        }
    }, [props.lastDetailRefresh.time])

    useEffect(() => {
        if (queryData !== null && queryData.coord && !recentCityClicked) {
            let newEntry = {
                name:queryData.name,
                temperature:queryData.main.temp,
                description: queryData.weather[0].main,
            }
            if (previousSearches.length < 8) {
                setPreviousSearches(previousSearches => [newEntry, ...previousSearches]);
            } else {
                previousSearches.pop();
                setPreviousSearches(previousSearches => [newEntry, ...previousSearches]);
            }
        }
    }, [queryData])

    const [recentCityClicked, setRecentCityClicked] = useState(false);
    function recentCityClick(cityName){
        setRecentCityClicked(recentCityClicked => true);
        setLastQuery(lastQuery => cityName);
    }

    function addCity() {
        if (searchBar !== "") {
            setLastQuery(lastQuery => searchBar);
        }
    }

    function clearRecents() {
        setPreviousSearches([]);
    }

    return (
        <div className="SearchPanel">
            <div id={"searchDiv"}>
                <input id={"citySearchBar"} placeholder={"Type city name"} value={searchBar} onChange={handleSearchBarChange} type="text"/>
                <button id={"addCityButton"} data-testid={"addCityButtonTestID"} value={"addCity"} onClick={addCity}><FaPlus /></button>
            </div>
            <div>
                {showError ? <Error textColor={"red"} border={"0.1em solid red"} borderRadius={"0.5em"}  margin={"1em 0"}
                                    message={"Invalid city name. Please try again."} /> : null}
            </div>
            <div>
                <hr id={"SearchPanelHR"}/>
            </div>
            <div id={"recentCitiesDiv"}>
                <p id={"recentLocationsText"}>Recent Locations</p>
                <hr id={"recentCitiesHR"}/>
                {getRecentCities()}
            </div>
            <div id={"clearDiv"}>
                <button id={"clearButton"} onClick={clearRecents}>Clear</button>
            </div>
        </div>
    );
}

export {SearchPanel};

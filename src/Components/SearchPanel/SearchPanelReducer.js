import React from 'react';
import {UPDATE_WEATHER_DATA} from "./SearchPanelActions";

const defaultState = {
    name: "No City Selected",
};

export const SearchPanelReducer = (state= defaultState, action) => {
    switch(action.type){
        case UPDATE_WEATHER_DATA:
            return Object.assign({...state}, action.payload);
        default:
            return state;
    }
}

import React from 'react';
import {REQUEST_NEW_WEATHER_DATA} from "./DetailPanelActions";

const defaultState = {
    lastRefresh: {
        cityName: "",
        time: "",
    }
};

export const DetailPanelReducer = (state = defaultState, action) => {
    switch (action.type) {
        case REQUEST_NEW_WEATHER_DATA:
            let newState = {
                lastRefresh: action.payload,
            };
            return Object.assign({...state}, newState);
        default:
            return state;
    }
}

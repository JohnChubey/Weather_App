import React from 'react';
import {render, screen} from "@testing-library/react";
import App from "./App";
import {Provider} from "react-redux";
import {createStore} from "redux";
import {allReducers} from "./reducers-index";
import userEvent from "@testing-library/user-event";
import {waitFor} from "@testing-library/dom";
import {
    edmontonApiCall,
    edmontonDailyForecast,
    halifaxApiCall,
    halifaxDailyForecast, lastRefresh,
    successCode
} from "./Utilities/Testing/TestData";

beforeEach(() => {
    fetch.resetMocks();
})

test('Render App component', () => {
    const store = createStore(allReducers);
    render(<Provider store={store}><App /></Provider>);
    expect(screen.getByText("No weather to show. Please enter a city name in the top left box.")).toBeInTheDocument();
    expect(screen.getByText("No City Selected")).toBeInTheDocument();
    expect(screen.getByText("No previous cities")).toBeInTheDocument();
    expect(screen.getByText("Recent Locations")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Type city name")).toBeInTheDocument();
})

test('Click on city button', async () => {
    fetch.mockResponses([JSON.stringify(halifaxApiCall), successCode], [JSON.stringify(halifaxDailyForecast), successCode],[JSON.stringify(halifaxDailyForecast), successCode],
        [JSON.stringify(edmontonApiCall), successCode], [JSON.stringify(edmontonDailyForecast), successCode], [JSON.stringify(edmontonDailyForecast), successCode],
        [JSON.stringify(halifaxApiCall), successCode], [JSON.stringify(halifaxDailyForecast), successCode],[JSON.stringify(halifaxDailyForecast), successCode]);

    const store = createStore(allReducers);
    render(<Provider store={store}><App /></Provider>);
    await userEvent.type(screen.getByPlaceholderText("Type city name"), "halifax");
    await userEvent.click(screen.getByTestId("addCityButtonTestID"));
    await waitFor(() => screen.findAllByText(/([A-Za-z]*)\s-\s([\-]?)([0-9]*)/));
    expect(await screen.findAllByText(/([A-Za-z]*)\s-\s([\-]?)([0-9]*)/)).toHaveLength(1);
    expect(await screen.findByPlaceholderText("Type city name")).toBeEmptyDOMElement();

    await userEvent.type(screen.getByPlaceholderText("Type city name"), "Edmonton");
    await userEvent.click(screen.getByTestId("addCityButtonTestID"));
    await waitFor(() => screen.findAllByText(/Edmonton - /));
    expect(await screen.findAllByText(/([A-Za-z]*)\s-\s([\-]?)([0-9]*)/)).toHaveLength(2);
    expect(await screen.getByRole("heading")).toHaveTextContent("Edmonton");

    await userEvent.click(screen.getByRole("button", {name: /Halifax - /}));
    await waitFor(() => screen.getByRole("heading"));

    expect(await screen.getByRole("heading")).toHaveTextContent("Halifax");
})

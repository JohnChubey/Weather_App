import React from 'react';
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {waitFor} from "@testing-library/dom";
import {SearchPanel} from "../SearchPanel";
import {
    berlinApiCall,
    berlinDailyForecast,
    edmontonApiCall,
    edmontonDailyForecast,
    frederictonApiCall,
    frederictonDailyForecast,
    halifaxApiCall,
    halifaxDailyForecast,
    honoluluApiCall,
    honoluluDailyForecast, invalidApiCall, lastRefresh,
    newYorkApiCall,
    newYorkDailyForecast,
    parisApiCall,
    parisDailyForecast,
    successCode,
    torontoApiCall,
    torontoDailyForecast,
    vancouverApiCall,
    vancouverDailyForecast
} from "../../../Utilities/Testing/TestData";

beforeEach(() => {
    fetch.resetMocks();
})

test('Rendering SearchPanel', () => {
    render(<SearchPanel lastDetailRefresh={lastRefresh}/>);
    expect(screen.getByText("No previous cities")).toBeInTheDocument();
    expect(screen.getByText("Recent Locations")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Type city name")).toBeInTheDocument();
})

test('Adding new cities', async () => {
    fetch.mockResponses([JSON.stringify(halifaxApiCall), successCode], [JSON.stringify(halifaxDailyForecast), successCode],
        [JSON.stringify(edmontonApiCall), successCode], [JSON.stringify(edmontonDailyForecast), successCode],
        [JSON.stringify(newYorkApiCall), successCode], [JSON.stringify(newYorkDailyForecast), successCode],
        [JSON.stringify(vancouverApiCall), successCode], [JSON.stringify(vancouverDailyForecast), successCode],
        [JSON.stringify(torontoApiCall), successCode], [JSON.stringify(torontoDailyForecast), successCode],
        [JSON.stringify(honoluluApiCall), successCode], [JSON.stringify(honoluluDailyForecast), successCode],
        [JSON.stringify(parisApiCall), successCode], [JSON.stringify(parisDailyForecast), successCode],
        [JSON.stringify(berlinApiCall), successCode], [JSON.stringify(berlinDailyForecast), successCode],
        [JSON.stringify(frederictonApiCall), successCode], [JSON.stringify(frederictonDailyForecast), successCode]);

    render(<SearchPanel lastDetailRefresh={lastRefresh} updateWeatherData={() => {}}/>);
    await userEvent.type(screen.getByPlaceholderText("Type city name"), "halifax");
    await userEvent.click(screen.getByTestId("addCityButtonTestID"));
    await waitFor(() => screen.findAllByText(/([A-Za-z]*)\s-\s([\-]?)([0-9]*)/));
    expect(await screen.findAllByText(/([A-Za-z]*)\s-\s([\-]?)([0-9]*)/)).toHaveLength(1);
    expect(await screen.findByPlaceholderText("Type city name")).toBeEmptyDOMElement();

    await userEvent.type(screen.getByPlaceholderText("Type city name"), "Edmonton");
    await userEvent.click(screen.getByTestId("addCityButtonTestID"));
    await waitFor(() => screen.findAllByText(/Edmonton - /));
    expect(await screen.findAllByText(/([A-Za-z]*)\s-\s([\-]?)([0-9]*)/)).toHaveLength(2);

    await userEvent.type(screen.getByPlaceholderText("Type city name"), "New York");
    await userEvent.click(screen.getByTestId("addCityButtonTestID"));
    await waitFor(() => screen.findAllByText(/New York - /));

    await userEvent.type(screen.getByPlaceholderText("Type city name"), "Vancouver");
    await userEvent.click(screen.getByTestId("addCityButtonTestID"));
    await waitFor(() => screen.findAllByText(/Vancouver - /));

    await userEvent.type(screen.getByPlaceholderText("Type city name"), "Toronto");
    await userEvent.click(screen.getByTestId("addCityButtonTestID"));
    await waitFor(() => screen.findAllByText(/Toronto - /));

    await userEvent.type(screen.getByPlaceholderText("Type city name"), "Honolulu");
    await userEvent.click(screen.getByTestId("addCityButtonTestID"));
    await waitFor(() => screen.findAllByText(/Honolulu - /));

    await userEvent.type(screen.getByPlaceholderText("Type city name"), "Paris");
    await userEvent.click(screen.getByTestId("addCityButtonTestID"));
    await waitFor(() => screen.findAllByText(/Paris - /));

    await userEvent.type(screen.getByPlaceholderText("Type city name"), "Berlin");
    await userEvent.click(screen.getByTestId("addCityButtonTestID"));
    await waitFor(() => screen.findAllByText(/Berlin - /));
    expect(await screen.findAllByText(/([A-Za-z]*)\s-\s([\-]?)([0-9]*)/)).toHaveLength(8);

    await userEvent.type(screen.getByPlaceholderText("Type city name"), "Fredericton");
    await userEvent.click(screen.getByTestId("addCityButtonTestID"));
    await waitFor(() => screen.findAllByText(/Fredericton - /));
    expect(await screen.findAllByText(/([A-Za-z]*)\s-\s([\-]?)([0-9]*)/)).toHaveLength(8);
})

test('Removing individual city', async () => {
    fetch.mockResponses([JSON.stringify(halifaxApiCall), successCode], [JSON.stringify(halifaxDailyForecast), successCode],
        [JSON.stringify(edmontonApiCall), successCode], [JSON.stringify(edmontonDailyForecast), successCode]);

    render(<SearchPanel lastDetailRefresh={lastRefresh} updateWeatherData={() => {}}/>);
    await userEvent.type(screen.getByPlaceholderText("Type city name"), "halifax");
    await userEvent.click(screen.getByTestId("addCityButtonTestID"));
    await waitFor(() => screen.findAllByText(/([A-Za-z]*)\s-\s([\-]?)([0-9]*)/));
    expect(await screen.findAllByText(/([A-Za-z]*)\s-\s([\-]?)([0-9]*)/)).toHaveLength(1);
    expect(await screen.findByPlaceholderText("Type city name")).toBeEmptyDOMElement();

    await userEvent.type(screen.getByPlaceholderText("Type city name"), "Edmonton");
    await userEvent.click(screen.getByTestId("addCityButtonTestID"));
    await waitFor(() => screen.findAllByText(/Edmonton - /));
    expect(await screen.findAllByText(/([A-Za-z]*)\s-\s([\-]?)([0-9]*)/)).toHaveLength(2);

    let removeHalifaxButton = document.getElementsByClassName("recentCityRemoveCityButton")[1];
    await userEvent.click(removeHalifaxButton);

    expect(await screen.findAllByText(/([A-Za-z]*)\s-\s([\-]?)([0-9]*)/)).toHaveLength(1);
    expect(await screen.queryByText(/Halifax - /)).toBeNull();
})

test('Clearing all cities using clear button', async () => {
    fetch.mockResponses([JSON.stringify(halifaxApiCall), successCode], [JSON.stringify(halifaxDailyForecast), successCode],
        [JSON.stringify(edmontonApiCall), successCode], [JSON.stringify(edmontonDailyForecast), successCode]);

    render(<SearchPanel lastDetailRefresh={lastRefresh} updateWeatherData={() => {}}/>);
    await userEvent.type(screen.getByPlaceholderText("Type city name"), "halifax");
    await userEvent.click(screen.getByTestId("addCityButtonTestID"));
    await waitFor(() => screen.findAllByText(/([A-Za-z]*)\s-\s([\-]?)([0-9]*)/));
    expect(await screen.findAllByText(/([A-Za-z]*)\s-\s([\-]?)([0-9]*)/)).toHaveLength(1);
    expect(await screen.findByPlaceholderText("Type city name")).toBeEmptyDOMElement();

    await userEvent.type(screen.getByPlaceholderText("Type city name"), "Edmonton");
    await userEvent.click(screen.getByTestId("addCityButtonTestID"));
    await waitFor(() => screen.findAllByText(/Edmonton - /));
    expect(await screen.findAllByText(/([A-Za-z]*)\s-\s([\-]?)([0-9]*)/)).toHaveLength(2);

    // let removeHalifaxButton = document.getElementsByClassName("recentCityRemoveCityButton")[1];
    await userEvent.click(screen.getByRole("button", {name: "Clear"}));

    expect(await screen.queryByText(/([A-Za-z]*)\s-\s([\-]?)([0-9]*)/)).toBeNull();
})

test('Entering invalid city', async () => {
    fetch.once(JSON.stringify(invalidApiCall));
    render(<SearchPanel lastDetailRefresh={lastRefresh}/>);
    await userEvent.type(screen.getByPlaceholderText("Type city name"), "asdasdasad");
    await userEvent.click(screen.getByTestId("addCityButtonTestID"));
    await waitFor(() => screen.getByText(/Invalid/), {timeout: 3000});
    expect(await screen.findByText(/Invalid city name. Please try again./)).toBeInTheDocument();
})


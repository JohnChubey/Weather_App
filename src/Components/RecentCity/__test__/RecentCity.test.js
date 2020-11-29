import React from 'react';
import {RecentCity} from "../RecentCity";
import {render, screen} from "@testing-library/react";
import {
    edmontonApiCall,
    recentCityTestData,
    successCode
} from "../../../Utilities/Testing/TestData";
import userEvent from "@testing-library/user-event";
import {waitFor} from "@testing-library/dom";

beforeEach(() => {
    fetch.resetMocks();
})

test('render RecentCity component', async () => {
    fetch.mockResponses([JSON.stringify(edmontonApiCall), successCode], [JSON.stringify(edmontonApiCall), successCode]);
    render(<RecentCity recentCityClick={recentCityTestData.recentCityClick} removeCity={recentCityTestData.removeCity}
                       idx={recentCityTestData.idx} name={recentCityTestData.name} temp={recentCityTestData.temperature}
                       desc={recentCityTestData.description}/>);
    await waitFor(() => screen.getByText(/Edmonton - /));
})


test('Refresh recent city', async () => {
    fetch.mockResponses([JSON.stringify(edmontonApiCall), successCode], [JSON.stringify(edmontonApiCall), successCode]);
    render(<RecentCity recentCityClick={recentCityTestData.recentCityClick} removeCity={recentCityTestData.removeCity}
                       idx={recentCityTestData.idx} name={recentCityTestData.name} temp={recentCityTestData.temperature}
                       desc={recentCityTestData.description}/>);
    await waitFor(() => screen.getByText(/Edmonton - /));
    expect(fetch).toHaveBeenCalledTimes(1);
    await userEvent.click(screen.getByTestId("recentCityRefreshButtonTestID"));
    await waitFor(() => screen.getByText(/Edmonton - /));
    expect(fetch).toHaveBeenCalledTimes(2);
})


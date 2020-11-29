import React from 'react';
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {waitFor} from "@testing-library/dom";
import {DetailPanel} from "../DetailPanel";
import {edmontonApiCall, edmontonDailyForecast, successCode} from "../../../Utilities/Testing/TestData";

beforeEach(() => {
    fetch.resetMocks();
})

test('Refresh recent city', async () => {
    let clicked = false;
    fetch.once( JSON.stringify(edmontonDailyForecast));
    render(<DetailPanel searchPanel={edmontonApiCall} refreshWeatherData={() => clicked=true}/>);
    await userEvent.click(screen.getByRole("button"));
    await waitFor(() => screen.getByText(/Edmonton/));
    await expect(clicked === true);
})


import React from 'react';
import "./App.scss";
import SearchPanelContainer from "./Components/SearchPanel/SearchPanelContainer";
import DetailPanelContainer from "./Components/DetailPanel/DetailPanelContainer";

function App() {
    return (
        <div className="App">
            <SearchPanelContainer />
            <DetailPanelContainer />
        </div>
    );
}

export default App;

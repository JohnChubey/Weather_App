import React from 'react';
import {SearchPanel} from "./SearchPanel";
import {connect} from "react-redux";
import {updateWeatherData} from "./SearchPanelActions";
import {bindActionCreators} from "redux";

function mapStateToProps(state){
    return {
        searchPanel: state.SearchPanelReducer,
        lastDetailRefresh: state.DetailPanelReducer.lastRefresh,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        updateWeatherData,
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPanel)

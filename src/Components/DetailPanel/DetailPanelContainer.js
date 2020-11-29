import React from 'react';
import {connect} from "react-redux";
import {DetailPanel} from "./DetailPanel";
import {refreshWeatherData} from "./DetailPanelActions";
import {bindActionCreators} from "redux";

function mapStateToProps(state){
    return {
        searchPanel:state.SearchPanelReducer,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        refreshWeatherData,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailPanel)

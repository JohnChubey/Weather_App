import {combineReducers} from "redux";
import {SearchPanelReducer} from "./Components/SearchPanel/SearchPanelReducer";
import {DetailPanelReducer} from "./Components/DetailPanel/DetailPanelReducer";


const allReducers = combineReducers({
    SearchPanelReducer,
    DetailPanelReducer,
});

export {allReducers};
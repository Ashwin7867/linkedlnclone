import { combineReducers } from "redux";
import { feedReducer } from "./feedReducer";

const rootReducer = combineReducers({
    feedReducer : feedReducer
});

export default rootReducer;

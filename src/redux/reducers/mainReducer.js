import { combineReducers } from "redux";

import cityReducer from "./cityReducer";
import itineraryReducer from "./itineraryReducer";
import countryReducer from "./countryReducer";
import userReducer from "./userReducer";

const mainReducer = combineReducers({cityReducer,itineraryReducer,countryReducer,userReducer})
export default mainReducer
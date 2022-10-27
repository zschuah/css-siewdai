import counterReducer from "./counterReducer";
import loggedReducer from "./isLoggedReducer";
import themeColorReducer from "./themeColorReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
  themeColor: themeColorReducer,
});

export default allReducers;

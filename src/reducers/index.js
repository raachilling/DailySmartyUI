import { combineReducers } from 'redux';

import {reducer as form} from "react-redux";

import posts from "./postReducer";

const rootReducer = combineReducers({
  form
});

export default rootReducer;
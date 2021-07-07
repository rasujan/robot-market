import { combineReducers } from "redux";
import robotReducer from "./robot/robotReducer";

const rootReducer = combineReducers({
  robot: robotReducer,
});

export default rootReducer;

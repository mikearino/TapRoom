import formReducer from "./formReducer";
import kegReducer from "./kegReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  kegControl: kegReducer,
  formControl: formReducer
});

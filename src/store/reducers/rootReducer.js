import authReducer from "./authReducer";
import stockReducer from "./stockReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  stock: stockReducer
});

export default rootReducer;

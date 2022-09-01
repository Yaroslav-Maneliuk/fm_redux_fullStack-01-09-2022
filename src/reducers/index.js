import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import toDoReducer from "./toDoReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  toDo: toDoReducer,
  users: userReducer,
});

export default rootReducer;

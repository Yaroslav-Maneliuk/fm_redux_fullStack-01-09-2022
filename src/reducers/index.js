import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import toDoReducer from "./toDoReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  toDo: toDoReducer,
  usersState: userReducer,
});

export default rootReducer;

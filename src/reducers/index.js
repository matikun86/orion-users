import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { reducer as formReducer } from "redux-form";
import contactsReducer from './contactsReducer';

// main reducers
export const reducers = combineReducers({
  routing: routerReducer,
  form: formReducer,
  contactsReducer
});

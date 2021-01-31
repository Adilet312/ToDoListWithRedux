import { createStore, combineReducers, applyMiddleware } from 'redux';
import { todoReducer } from '../reducers/todoReducer.js';
import { todoFilter } from '../reducers/filterReducer.js';
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const reducers = {
    todos: todoReducer,
    filter: todoFilter,

}

const rootReducer = combineReducers(reducers);
export const configStore = () => createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

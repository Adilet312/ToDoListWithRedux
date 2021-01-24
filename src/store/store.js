import { createStore, combineReducers } from 'redux';
import { todos } from '../reducers/todoReducer.js';


const reducers = {
    todos,
}

const rootReducer = combineReducers(reducers);
export const configStore = () => createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

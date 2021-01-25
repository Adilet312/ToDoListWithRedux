import { createStore, combineReducers } from 'redux';
import { todoReducer } from '../reducers/todoReducer.js';
import { todoFilter } from '../reducers/filterReducer.js';


const reducers = {
    todos: todoReducer,
    filteredTodos: todoFilter
}

const rootReducer = combineReducers(reducers);
export const configStore = () => createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

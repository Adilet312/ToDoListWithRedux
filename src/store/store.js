import { createStore, combineReducers } from 'redux';
import { todos } from '../reducers/reducers.js';


const reducers = {
    todos,
}

const rootReducer = combineReducers(reducers);
export const configStore = () => createStore(rootReducer)
console.log('configStore: ',configStore().getState());

import { createStore, combineReducers } from 'redux';
import { todos } from '../reducers/reducers';


const reducers = {
    todos,
}

export const configStore = () => createStore(reducers)
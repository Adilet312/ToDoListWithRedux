import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO, EDIT_TODO } from '../constants/constants';
import uuid from 'react-uuid'


export const  todos = (state=[], action) =>{
    switch(action.type){
        case ADD_TODO: {
            return applyAddTodo(state, action);
        }
        case REMOVE_TODO: {
            return applyRemoveTodo(state, action);
        }
        case TOGGLE_TODO: {
            return applyToggleTodo(state, action);
        }
        case EDIT_TODO:{
          return applyUpdateTodo(state, action);
        }
        default:
            return state;

    }
}

function applyAddTodo( state, action ){
    const newTodo = Object.assign({},action.payload,{isCompleted: false}, {id: uuid()});
    return state.concat(newTodo);

}

function applyToggleTodo(state, action){
    const todos = state.map( todo => todo.id === action.payload.id ? Object.assign({}, todo, {isCompleted: !todo.isCompleted}) : todo);
    return todos;
}

function applyRemoveTodo(state, action){
    const todos = state.filter( todo => todo.id !== action.payload.id && todo);
    return todos;
}

function applyUpdateTodo(state, action){
  const todos = state.map( todo => todo.id === action.payload.id ? Object.assign({}, todo, {text: action.payload.text}) : todo);
  return todos;
}
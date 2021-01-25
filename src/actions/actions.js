
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, EDIT_TODO, SET_FILTER } from '../constants/constants';

export const addTodo = (text) =>({
   type: ADD_TODO,
   payload: { text }
})

export const toggleTodo = (id) =>({
    type: TOGGLE_TODO,
    payload: { id }
})

export const removeTodo = (id) =>({
    type: REMOVE_TODO,
    payload: { id }
})

export const editTodo = ( id, text) =>({
  type: EDIT_TODO,
  payload: { text, id }

})

export const setFilter = (filter) =>({
  type: SET_FILTER,
  filter,
})

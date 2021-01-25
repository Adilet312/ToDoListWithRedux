
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, EDIT_TODO, SHOW_ALL, SHOW_COMPLETED, SHOW_INCOMPLETED } from '../constants/constants';

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

export const showAll = (state) =>({
  type: SHOW_ALL,
  payload: state
})

export const showCompleted = (state) =>({
  type: SHOW_COMPLETED,
  payload: state
})

export const showInCompleted = (state) =>({
  type: SHOW_INCOMPLETED,
  payload: state
})

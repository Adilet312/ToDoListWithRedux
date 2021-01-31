import { SHOW_ALL, SHOW_COMPLETED, SHOW_INCOMPLETED } from '../constants/constants.js';

export const getStateTodos = (state, filter) =>{
  if(filter === SHOW_ALL){
    return state;
  }else if(filter=== SHOW_COMPLETED){
    return state.filter( item => item.isCompleted && item);
  }else if( filter === SHOW_INCOMPLETED){
    return state.filter( item => !item.isCompleted && item)
  }
}

import { SHOW_ALL, SHOW_COMPLETED, SHOW_INCOMPLETED } from '../constants/constants';

export const todoFilter = (state = [],action) => {
  switch (action.type) {
    case SHOW_COMPLETED:{
      return applyShowCompleted(  action )
    }
    case SHOW_INCOMPLETED:{
      return applyShowInCompleted( action )
    }
    case SHOW_ALL:{
      return applyShowAll(  action )
    }

  }
  return state;
}

function applyShowAll(  action ){
  return action.payload;
}
function applyShowCompleted( action ){
  const todos = action.payload.filter( todo => todo.isCompleted && todo)
  return todos;
}
function applyShowInCompleted( action ){
  const todos = action.payload.filter( todo => !todo.isCompleted && todo)
  return todos;
}

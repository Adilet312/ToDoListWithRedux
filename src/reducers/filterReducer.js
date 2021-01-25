import { SHOW_ALL, SET_FILTER } from '../constants/constants';

export const todoFilter = (state = SHOW_ALL ,action) => {
  switch (action.type) {
    case SET_FILTER:{
      return applyFilter( state, action );
    }
    default:{
      return state;
    }
  }
}

function applyFilter( state, action ){
  return action.filter;
}

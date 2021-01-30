import React  from 'react';
import { connect } from 'react-redux';
import { toggleTodo, removeTodo, editTodo, setFilter} from '../../actions/actions';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_INCOMPLETED } from '../../constants/constants.js';
import ToDoListItem from '../ToDoListItem/ToDoListItem.js';
import ToDoListForm from '../ToDoListForm/ToDoListForm.js';
import Filter from '../Filter/Filter.js';
import './ToDoList.css';

const ToDoList = ({ listOfTodos, removeTask, toggleTask, editTask, setFilterTask}) => {
    return(
        <section className = 'container'>
            <ToDoListForm/>
            <ul>
            {
              listOfTodos.map( item => <li><ToDoListItem task = {item} removeTask = {removeTask} toggleTask = {toggleTask} editTask = {editTask}/></li>)
            }
            </ul>
            <Filter  setFilterTask = {setFilterTask}/>
        </section>
    )
}
const mapStateToProps = (state) => ({
    listOfTodos: getStateTodos(state.todos, state.filter)

});
const mapDispatchToProps = (dispatch) =>({
  removeTask: (id) => dispatch(removeTodo(id)),
  toggleTask: (id) => dispatch(toggleTodo(id)),
  editTask: (id, text) => dispatch(editTodo(id, text)),
  setFilterTask: ( filter) => dispatch(setFilter( filter ))
})
export default connect(mapStateToProps,mapDispatchToProps)(ToDoList);

function getStateTodos(state,filter){
  if(filter === SHOW_ALL){
    return state;
  }else if(filter=== SHOW_COMPLETED){
    return state.filter( item => item.isCompleted && item);
  }else if( filter === SHOW_INCOMPLETED){
    return state.filter( item => !item.isCompleted && item)
  }
}
// function getTodos(filter, list){
//   if(filter === SHOW_ALL){
//     return list;
//   }else if(filter=== SHOW_COMPLETED){
//     return list.filter( item => item.isCompleted && item);
//   }else if( filter === SHOW_INCOMPLETED){
//     return list.filter( item => !item.isCompleted && item)
//   }
// }

import React  from 'react';
import { connect } from 'react-redux';
import { toggleTodo, removeTodo, editTodo, setFilter} from '../../actions/actions';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_INCOMPLETED } from '../../constants/constants.js';
import ToDoListItem from '../ToDoListItem/ToDoListItem.js';
import ToDoListForm from '../ToDoListForm/ToDoListForm.js';
import Filter from '../Filter/Filter.js';
import './ToDoList.css';

const ToDoList = ({ listOfTodos, removeTask, toggleTask, editTask,filter, setFilterTask}) => {
    const todo_list = getTodos(filter, listOfTodos);
    return(
        <section className = 'container'>
            <ToDoListForm/>
            <ul>
            {
              todo_list.map( item => <li><ToDoListItem task = {item} removeTask = {removeTask} toggleTask = {toggleTask} editTask = {editTask}/></li>)
            }
            </ul>
            <Filter filter = {filter} setFilterTask = {setFilterTask}/>
        </section>
    )
}
const mapStateToProps = (state) => ({
    listOfTodos: state.todos,
    filter: state.filter
});
const mapDispatchToProps = (dispatch) =>({
  removeTask: (id) => dispatch(removeTodo(id)),
  toggleTask: (id) => dispatch(toggleTodo(id)),
  editTask: (id, text) => dispatch(editTodo(id, text)),
  setFilterTask: ( filter) => dispatch(setFilter( filter ))
})
export default connect(mapStateToProps,mapDispatchToProps)(ToDoList);

function getTodos(filter, list){
  if(filter === SHOW_ALL){
    return list;
  }else if(filter=== SHOW_COMPLETED){
    return list.filter( item => item.isCompleted && item);
  }else if( filter === SHOW_INCOMPLETED){
    return list.filter( item => !item.isCompleted && item)
  }
}

import React  from 'react';
import { connect } from 'react-redux';
import { toggleTodo, removeTodo, editTodo, showCompleted, showAll, showInCompleted } from '../../actions/actions';
import ToDoListItem from '../ToDoListItem/ToDoListItem.js';
import ToDoListForm from '../ToDoListForm/ToDoListForm.js';
import './ToDoList.css';

const ToDoList = ({ listOfTodos, removeTask, toggleTask, editTask,filter,showCompletedTasks, showAllTasks, showInCompletedTasks }) => {
  console.log("filtered",filter);
    return(
        <section className = 'container'>
            <ToDoListForm/>
            <ul>
            {
                !filter.length ? listOfTodos.map( item => <li><ToDoListItem task = {item} removeTask = {removeTask} toggleTask = {toggleTask} editTask = {editTask}/></li>):filter.map( item => <li><ToDoListItem task = {item} removeTask = {removeTask} toggleTask = {toggleTask} editTask = {editTask}/></li>)
            }
            </ul>
            <section className = 'filter'>
              <input type = 'submit' value = 'Show all' className = 'show_all' onClick =
              {()=>showAllTasks(listOfTodos)}/>
              <input type = 'submit' value = 'Show completed' className = 'show_completed' onClick = {()=>showCompletedTasks(listOfTodos)}/>
              <input type = 'submit' value = 'Show incompleted' className = 'show_incompleted' onClick = {()=>showInCompletedTasks(listOfTodos)}/>
            </section>
        </section>
    )
}
const mapStateToProps = (state) => ({
    listOfTodos: state.todos,
    filter: state.filteredTodos
});
const mapDispatchToProps = (dispatch) =>({
  removeTask: (id) => dispatch(removeTodo(id)),
  toggleTask: (id) => dispatch(toggleTodo(id)),
  editTask: (id, text) => dispatch(editTodo(id, text)),
  showCompletedTasks: (state) => dispatch(showCompleted(state)),
  showInCompletedTasks: (state) => dispatch(showInCompleted(state)),
  showAllTasks: (state) => dispatch(showAll(state))
})
export default connect(mapStateToProps,mapDispatchToProps)(ToDoList);

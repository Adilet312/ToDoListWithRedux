import React  from 'react';
import { connect } from 'react-redux';
import { toggleTodo, removeTodo, editTodo } from '../../actions/actions';
import ToDoListItem from '../ToDoListItem/ToDoListItem.js';
import ToDoListForm from '../ToDoListForm/ToDoListForm.js';
import './ToDoList.css';

const ToDoList = ({ listOfTodos, removeTask, toggleTask, editTask }) => {
    return(
        <section className = 'container'>
            <ToDoListForm/>
            <ul>
            {
                listOfTodos.map( item => <li><ToDoListItem task = {item} removeTask = {removeTask} toggleTask = {toggleTask} editTask = {editTask}/></li>)
            }
            </ul>

        </section>
    )
}
const mapStateToProps = (state) => ({
    listOfTodos: state.todos
});
const mapDispatchToProps = (dispatch) =>({
  removeTask: (id) => dispatch(removeTodo(id)),
  toggleTask: (id) => dispatch(toggleTodo(id)),
  editTask: (id, text) => dispatch(editTodo(id, text))
})
export default connect(mapStateToProps,mapDispatchToProps)(ToDoList);

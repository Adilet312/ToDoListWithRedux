import React, {Fragment} from 'react';
import ToDoListItem from '../ToDoListItem/ToDoListItem.js';
import ToDoListForm from '../ToDoListForm/ToDoListForm.js';
import './ToDoList.css';
const todos = [
    {task:'React',isCompleted: false},
    {task:'Redux',isCompleted: false},
    {task:'JavaScript',isCompleted: false},
    {task:'Python',isCompleted: false}
]
const ToDoList = () => {
    return(
        <section className = 'container'> 
            <ToDoListForm/>
            <ul>
            {
                todos.map( item => <li><ToDoListItem task = {item.task}/></li>)
            }
            </ul>
          
        </section>
    )
}
export default ToDoList;
import React  from 'react';
import ToDoListItem from '../ToDoListItem/ToDoListItem.js';
import ToDoListForm from '../ToDoListForm/ToDoListForm.js';
import './ToDoList.css';
const todos1 = [
    {task:'React',isCompleted: false},
    {task:'Redux',isCompleted: false},
    {task:'JavaScript',isCompleted: false},
    {task:'Python',isCompleted: false}
]
const ToDoList = ({todos=todos1}) => {
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
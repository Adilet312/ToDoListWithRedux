import React from 'react';
import ToDoListItem from './ToDoListItem.js';
const ToDoList = ({todos}) => {
    return(
        <> 
            <ul>
            {
                todos.map( item => <li><ToDoListItem task = {item.task}/></li>)
            }
            </ul>
          
        </>
    )
}
export default ToDoList;
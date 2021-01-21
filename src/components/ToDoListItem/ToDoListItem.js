import React,{useState} from 'react';
import './ToDoListItem.css';
const ToDoListItem = ({task}) =>{
    

    return(
        <div className = 'task'>
            <h1>{task}</h1>
            <div className = 'buttons'>
                <button className = 'isCompleted'>Mark as comleted</button>
                <button className = 'remove'>Remove</button>
            </div>
        </div>
    )
}
export default ToDoListItem;
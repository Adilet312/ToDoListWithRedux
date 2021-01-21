import React,{useState} from 'react';

const ToDoListItem = ({task}) =>{
    

    return(
        <div className = 'task'>
            <h1>{task}</h1>
            <div className = 'buttons'>
                <button>Mark as comleted</button>
                <button>Remove</button>
            </div>
        </div>
    )
}
export default ToDoListItem;
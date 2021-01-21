import React,{ useState } from 'react';
const ToDoListForm = () =>{
    const [task, setTask ] = useState('');
    const onSubmitTask = (e) =>{
        e.preventDefault();
        
    }
    return(
        <>
            <form onSubmit = {(e) => onSubmitTask(e)}>
                <input placeholder = 'Enter task!' onChange = {(e)=> setTask(e.target.value)}/>
            </form>
        </>
    )
}
export default ToDoListForm;

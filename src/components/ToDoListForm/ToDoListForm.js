import React,{ useState, Fragment } from 'react';
import './ToDoListForm.css';
const ToDoListForm = () =>{
    const [input, setTask ] = useState('');
    const onSubmitTask = (e) =>{
        e.preventDefault();
        
    }
    return(
        <section className = 'inputContainer' >
            <form onSubmit = {(e) => onSubmitTask(e)}>
                <input type = 'text' placeholder = 'Enter task!' onChange = {(e)=> setTask(e.target.value)}/>
                <input type = 'submit' value = 'Add task'/> 
            </form>
        </section>
    )
}
export default ToDoListForm;

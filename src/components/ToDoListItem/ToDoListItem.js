import React,{useState} from 'react';
import Modal from 'react-modal'
import './ToDoListItem.css';
const ToDoListItem = ({ task, removeTask, toggleTask, editTask }) =>{
    const [ isOpenModal, setIsOpenModal ] = useState(false);
    const [inputValue, setInputValue ] = useState('')
    const { text, id, isCompleted} = task;
    let innerText = isCompleted ? 'Completed' : 'Mark as comleted';
    return(
        <div className = 'task'>
            <h1>{text}</h1>
            <div className = 'buttons'>
                <button className = 'isCompleted' onClick = {() => toggleTask(id)} >{innerText}</button>
                <button className = 'remove' onClick = {() => removeTask(id)}>Remove</button>
                <button className = 'edit' onClick = {()=> setIsOpenModal(!isOpenModal)} >Edit</button>
            </div>
            <Modal isOpen = {isOpenModal}>
              <div className = 'modal'>
                <input type = 'text' placeholder = {text} onChange = {(e)=> setInputValue(e.target.value)}/>
                <input type = 'submit' value =  'Save' onClick = {()=> {
                  editTask(id,inputValue);
                  setIsOpenModal(!isOpenModal);
                  setInputValue('');
                }}/>
              </div>
            </Modal>
        </div>
    )
}
export default ToDoListItem;

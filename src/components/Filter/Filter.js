import React  from 'react';
import '../ToDoList/ToDoList.css';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_INCOMPLETED } from '../../constants/constants.js';
const Filter = ({ filter, setFilterTask }) =>{

  return(
    <section className = 'filter'>
      <input type = 'submit' value = 'Show all' className = 'show_all' onClick = {()=> setFilterTask(SHOW_ALL)}/>
      <input type = 'submit' value = 'Show completed' className = 'show_completed' onClick = {()=> setFilterTask(SHOW_COMPLETED)}/>
      <input type = 'submit' value = 'Show incompleted' className = 'show_incompleted' onClick = {()=> setFilterTask(SHOW_INCOMPLETED)}/>
    </section>
  )
}

export default Filter;

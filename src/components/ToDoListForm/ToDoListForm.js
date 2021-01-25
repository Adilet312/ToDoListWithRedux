import React,{ useState } from 'react';
import { addTodo } from '../../actions/actions';
import { connect } from 'react-redux';
import './ToDoListForm.css';
const ToDoListForm = ({ onSubmitPassed  }) =>{
    const [input, setTask ] = useState('');
    const onSubmitTask = (e) =>{
        e.preventDefault();
        onSubmitPassed(input)
        setTask('');

    }
    return(
        <section className = 'inputContainer' >
            <form onSubmit = {(e) => onSubmitTask(e)}>
                <input type = 'text' placeholder = 'Add task' value = {input} onChange = {(e)=> setTask(e.target.value)}/>
                <input type = 'submit' value = 'Add task'/>
            </form>
        </section>
    )
}
// const mapStateToProps = (state) => ({
//     todos: state.todos
// });
const mapDispatchToProps = (dispatch) => ({
    onSubmitPassed: text => dispatch(addTodo(text))
});
export default connect(null, mapDispatchToProps)(ToDoListForm);

//"export default ToDoListForm" replace such that: export default connect()(ToDoListForm)

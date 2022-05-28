import {useState} from 'react';

import './Form.css';

function Form(props) {


    const [task, setTask] = useState('');


    const onSubmit = (e) => {
        e.preventDefault();
        if (task.length < 1) return;
        props.onAdd(task);
        setTask('');
    }

    const onValueChange = (e) => {
        setTask (e.target.value);
    }
        
        return (
            <div className="app-add-form">
                <h3>Add new task</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={onSubmit}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Write task here"
                        name="task"
                        value={task}
                        onChange={onValueChange}/> 
    
                    <button type="submit"
                            className="btn btn-outline-dark">Add</button>
                </form>
            </div>
        );
    }

export default Form;

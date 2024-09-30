import { useRef, useState } from "react";
import { useToDoList } from '../../hooks/useToDoList';
import { Button } from "../button";
import { getLastId, getNames } from "../../utils";

import './newtaskform.css';

export const NewTaskForm = () => {
    const [newTask, setNewTask] = useState(null);
    const { list, handleInsert } = useToDoList();
    const inputRef = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        const lastId = getLastId(list);
        const names = getNames(list);
        if(newTask !== null && newTask !== '') {
            if(list.length === 0) {
                handleInsert({id: 1, name: newTask, done: false});
                setNewTask('');
                inputRef.current.value = '';
            }
            else if(names.includes(newTask)) {
                window.alert('You already have this task on your list!');
                setNewTask('');
                inputRef.current.value = '';
                
            } else {
                handleInsert({id: lastId + 1, name: newTask, done: false});
                setNewTask('');
                inputRef.current.value = '';
            } 
        } else window.alert('Type something!'); 
    };
    return (
        <form className="new-task-form" onSubmit={handleSubmit}>
            <div className="input-container">
                <label className="input-label" htmlFor="task-input">New task:</label>
                <input 
                    id="task-input" 
                    className="input" 
                    type="text" 
                    placeholder="Insert your new task here..." 
                    ref={inputRef} 
                    onChange={(e) => setNewTask(e.target.value)}
                />
            </div>
            <Button type='submit'>Create Task</Button>
        </form>
    )
};
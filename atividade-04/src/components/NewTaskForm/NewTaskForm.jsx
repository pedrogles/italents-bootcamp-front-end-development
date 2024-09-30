import { useRef, useState } from "react";
import { useToDoList } from '../../hooks/useToDoList';
import { Button, Input } from "../";
import { authNewTaskForm } from "../../utils";

import './newtaskform.css';

export const NewTaskForm = () => {
    const inputRef = useRef();
    const [newTask, setNewTask] = useState(null);
    const { list, handleInsert } = useToDoList();
    const handleSubmit = (e) => {
        e.preventDefault();
        authNewTaskForm(list, inputRef, handleInsert, newTask, setNewTask);
    };
    return (
        <form className="new-task-form" onSubmit={handleSubmit}>
            <Input 
                id="task-input" 
                label="New task:"
                type="text" 
                placeholder="Insert your new task here..." 
                ref={inputRef} 
                onChange={(e) => setNewTask(e.target.value)} 
            />
            <Button type='submit'>Create Task</Button>
        </form>
    )
};
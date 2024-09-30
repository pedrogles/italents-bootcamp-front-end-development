import { createContext, useState } from "react";

export const ToDoListContext = createContext();

export const ToDoListProvider = ({ children }) => {
    const [list, setList] = useState([]);
    const handleInsert = (newTask) => {
        setList(prevState => ([...prevState, newTask]));
    };
    const handleStatus = (id) => {
        const editedList = list.map((task) => {
            if(task.id === id) {
                const oldStatus = task.done;
                return {...task, done: !oldStatus}
            }
            return task;
        })
        setList(editedList);
    };
    const handleEdit = (id) => {
        const oldTask = list.filter(item => item.id === id)[0];
        const editedTask = prompt('Edit your task: ', oldTask.name);
        const editedList = list.map((task) => {
            if(task.id === id) {
                return {...task, name: editedTask}
            }
            return task;
        })
        setList(editedList);
    };
    const handleDelete = (id) => {
        const filteredList = list.filter(item => item.id !== id);
        if(window.confirm('Do you really want to delete this task?')) {
            setList(filteredList);
        };
    };
    return (
        <ToDoListContext.Provider value={{ list, handleInsert, handleStatus, handleEdit, handleDelete }}>
            {children}
        </ToDoListContext.Provider>
    )
}
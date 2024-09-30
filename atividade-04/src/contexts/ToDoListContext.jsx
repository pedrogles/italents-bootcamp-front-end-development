import { createContext, useEffect, useState } from "react";

import { getNames } from '../utils/getNames';

export const ToDoListContext = createContext();

export const ToDoListProvider = ({ children }) => {
    const [list, setList] = useState([]);
    useEffect(() => {
        handleGetData();
    }, []);
    const handleGetData = async () => {
        try {
            const response = await fetch('http://localhost:3001/todos');
            const data = await response.json();
            setList(data);
        } catch (error) {
            window.alert('Erro ao buscar dados:', error);
        }
    };
    const handleInsert = async (newTask) => {
        try {
            await fetch('http://localhost:3001/todos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newTask)
            });
            handleGetData();
        } catch (error) {
            window.alert('Erro ao inserir um novo dado:', error);
        }
    };
    const handleStatus = async (id, status) => {
        try {
            const newStatus = { done: !status};
            await fetch(`http://localhost:3001/todos/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newStatus)
            });
            handleGetData();
        } catch (error) {
            window.alert('Erro ao alterar status da tarefa:', error);
        }
    };
    const handleEdit = async (id, name) => {
        try {
            const promptResponse = prompt('Edit your task: ', name);
            const editedTask = {name: promptResponse};
            const names = getNames(list);
            if(promptResponse !== null && promptResponse !== '') {
                if(!names.includes(promptResponse)) {
                    await fetch(`http://localhost:3001/todos/${id}`, {
                        method: 'PATCH',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(editedTask)
                    });
                    handleGetData();
                } else { window.alert('You already have this task on your list!'); }
            };
        } catch (error) {
            window.alert('Erro ao alterar o nome da tarefa:', error);
        }
    };
    const handleDelete = async (id) => {
        try {
            if(window.confirm('Do you really want to delete this task?')) {
                await fetch(`http://localhost:3001/todos/${id}`, {
                    method: 'DELETE'
                });
                handleGetData();
            };
        } catch (error) {
            window.alert('Erro ao deletar tarefa:', error);
        }
    };
    return (
        <ToDoListContext.Provider value={{ list, handleInsert, handleStatus, handleEdit, handleDelete }}>
            {children}
        </ToDoListContext.Provider>
    )
}
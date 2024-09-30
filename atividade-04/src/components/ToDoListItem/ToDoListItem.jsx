import { useToDoList } from '../../hooks/useToDoList';
import { Button, CheckBoxInput } from '../../components';

import './todolistitem.css';

export const ToDoListItem = ({ id, name, status }) => {
    const { handleStatus, handleEdit, handleDelete } = useToDoList();
    return (
        <li className='to-do-list-item' key={id}>
            <div className='input-container'>
                <CheckBoxInput checked={status} onChange={() => handleStatus(id, status)} />
                <p className='input-name'>{name}</p>
            </div>
            <div className='buttons-container'>
                <Button onClick={() => handleEdit(id, name)}>&#9998;</Button>
                <Button onClick={() => handleDelete(id)}>&#10006;</Button>
            </div>
        </li>
    )
};
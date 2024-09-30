import { useToDoList } from '../../../hooks/useToDoList';
import { Button } from '../../button';
import './todolistitem.css';

export const ToDoListItem = ({ id, name }) => {
    const { handleStatus, handleEdit, handleDelete } = useToDoList();
    return (
        <li className='to-do-list-item' key={id}>
            <div className='input-container'>
                <input type="checkbox" name="" id="" onChange={() => handleStatus(id)} />
                {name}
            </div>
            <div className='buttons-container'>
                <Button onClick={() => handleEdit(id)}>Edit</Button>
                <Button onClick={() => handleDelete(id)}>Delete</Button>
            </div>
        </li>
    )
};
import { useToDoList } from '../../hooks/useToDoList';
import { ToDoListItem, Subtitle } from '../';
import './todolist.css';

export const ToDoList = () => {
    const { list } = useToDoList();
    return (
        <ul className='to-do-list'>
            {list.length > 0 ? 
            list.map((item) => (
                <ToDoListItem key={item.id} id={item.id} name={item.name} />
            )) : 
            <Subtitle>You dont have tasks in your list...</Subtitle>}
        </ul>
    )
};
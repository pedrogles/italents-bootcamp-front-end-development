import { getLastId, getNames } from ".";

export const authNewTaskForm = (list, inputRef, handleInsert, newTask, setNewTask) => {
    const lastId = getLastId(list);
    const names = getNames(list);
    if(newTask !== null && newTask !== '') {
        if(list.length === 0) {
            handleInsert({id: "1", name: newTask, done: false});
            setNewTask('');
            inputRef.current.value = '';
        }
        else if(names.includes(newTask)) {
            window.alert('You already have this task on your list!');
            setNewTask('');
            inputRef.current.value = '';
            
        } else {
            const id = parseInt(lastId) + 1;
            handleInsert({id: id.toString(), name: newTask, done: false});
            setNewTask('');
            inputRef.current.value = '';
        } 
    } else window.alert('Type something!'); 
}
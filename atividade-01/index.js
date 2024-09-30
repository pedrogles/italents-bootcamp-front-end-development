import { TaskManager } from "./TaskManager.js";

// Instancia o TaskManager
const taskManager = TaskManager.getInstance();

// Manipula o evento de submissão do formulário
const form = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const newTask = taskInput.value.trim();
    if (newTask !== '') {
        if (taskManager.tasks.includes(newTask)) {
            window.alert('This task is already on the list.');
        } else {
            taskManager.addTask(newTask);
            taskInput.value = '';
        }
    } else {
        window.alert('Please enter a task.');
    }
    console.log(taskManager.tasks);
});
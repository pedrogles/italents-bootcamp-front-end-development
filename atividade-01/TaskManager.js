import { Task } from "./Task.js";

export class TaskManager {
    static instance = null;

    constructor() {
        if (TaskManager.instance) {
            return TaskManager.instance;
        };
        this.tasks = [];
        this.taskList = document.getElementById('task-list');
        TaskManager.instance = this;
    };

    static getInstance() {
        if (!TaskManager.instance) {
            new TaskManager();
        };
        return TaskManager.instance;
    };

    // Adiciona uma nova tarefa à lista
    addTask(taskName) {
        const newTask = new Task(taskName);
        this.taskList.appendChild(newTask.getElement());
        this.tasks.push(taskName);
    };

    // Remove uma tarefa da lista
    removeTask(taskName) {
        const index = this.tasks.indexOf(taskName);
        if (index > -1) {
            this.tasks.splice(index, 1);
        };
    };
};
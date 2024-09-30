import { TaskManager } from "./TaskManager.js";

export class Task {
    constructor(taskName) {
        this.taskName = taskName;

        // Criação dos elementos DOM para a tarefa
        this.li = document.createElement('li');
        this.name = document.createElement('p');
        this.edit = document.createElement('button');
        this.del = document.createElement('button');

        // Configura o texto dos elementos
        this.name.textContent = taskName;
        this.edit.textContent = "Edit";
        this.del.textContent = "Delete";

        // Adiciona os elementos ao <li>
        this.li.appendChild(this.name);
        this.li.appendChild(this.edit);
        this.li.appendChild(this.del);

        // Adiciona eventos aos botões
        this.edit.addEventListener('click', () => this.editTask());
        this.del.addEventListener('click', () => this.deleteTask());
    };

    // Método para editar a tarefa
    editTask() {
        const editedTask = prompt('Edit your task', this.name.textContent);
        if (editedTask !== null && editedTask.trim() !== '') {
            this.name.textContent = editedTask;
        };
    };

    // Método para deletar a tarefa
    deleteTask() {
        if (confirm('Are you sure you want to delete this task?')) {
            this.li.remove();
            TaskManager.getInstance().removeTask(this.taskName);
        };
    };

    // Retorna o elemento <li>
    getElement() {
        return this.li;
    };
};
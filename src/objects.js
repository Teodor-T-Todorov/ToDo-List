class Todo{
    constructor(title, project, description, priority){
        this.title = title;
        this.project = project;
        this.description = description;
        this.priority = priority;
    }
}

class Project{
    constructor(name,todos) {
        this.name = name;
        this.todos = todos;
    }

    addTodo(object){
        this.todos.push(object);
    }
}
export {Todo, Project};
class Todo{
    constructor(title, project, description, date, priority){
        this.title = title;
        this.project = project;
        this.description = description;
        this.date = date;
        this.priority = priority;
    }
}

class Project{
    constructor(name,todos) {
        this.name = name;
        this.todos = todos;
    }
}
export {Todo, Project};
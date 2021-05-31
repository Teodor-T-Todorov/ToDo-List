import {Todo, Project} from './objects'
const containerTodos = document.querySelector('.containerTodos');
const input = document.querySelectorAll('.input');
const title = document.querySelector('.title');

//Create a new todo object
const createTodo = ()=>{
    const title = document.querySelector('#todoInput').value;
    const project = document.querySelector('#projectInput').value;
    const description = document.querySelector('#descriptionInput').value;
    const date = document.querySelector('#dateInput').value;
    const priority = document.querySelector('.priorities').value;
    return new Todo(title, project, description, date, priority);
}

//Display todos on the screen
const displayTodos = (fromProject)=>{

    if(fromProject == 'All') //Show all todos
    {
        title.textContent = 'TO-DO LIST';

        Object.keys(localStorage).forEach(function(project){
        
            if(localStorage.length != 0)
            {
                const SIZE = JSON.parse(localStorage.getItem(project)).todos.length;
    
                if(SIZE == 0)
                {
                    localStorage.removeItem(project); //Delete a project if it's empty
                }
    
                for(let i = 0; i < SIZE; i++)
                {
                    if(document.querySelector(`[data-project="${project}"][data-id="${i}"]`) == null) //Display a todo only if it's not displayed yet.
                    {
                        let currentTodo = JSON.parse(localStorage.getItem(project)).todos[i];
                    
                        const todo = document.createElement('div');
                        todo.setAttribute('class', 'todo');
                        todo.setAttribute('data-project', `${project}`);
                        todo.setAttribute('data-id', `${i}`);
            
                        // LHS
                        const lhs = document.createElement('div');
                        lhs.setAttribute('class', 'lhs');
                        lhs.innerHTML = 
                        `
                            <input type="checkbox">
                            <p class="title-todo">${currentTodo.title}</p>  
                        `;
                        todo.append(lhs);
            
                        // RHS
                        const rhs = document.createElement('div');
                        rhs.setAttribute('class', 'rhs');
    
                        let color;
                        switch(currentTodo.priority)
                        {
                            case 'high':
                                color = 'red';
                                break;
                            case 'medium':
                                color = 'orange';
                                break;
                            case 'low':
                                color = 'green';
                                break;
                        }
    
                        rhs.innerHTML = 
                        `
                            <i class="far fa-flag" title="Priority" style = "color:${color}"></i>
                            <i class="far fa-trash-alt" title="Delete todo"></i>
                            <i class="far fa-edit" title="Edit"></i>
                        `;
                        todo.append(rhs);
            
                        containerTodos.append(todo);
                    }
                }
            }
        });
    }
    else //Show todos only from 1 project
    {
        title.textContent = `${fromProject}`.toUpperCase();

        const SIZE = JSON.parse(localStorage.getItem(fromProject)).todos.length;

        for(let i = 0; i < SIZE; i++)
        {
            let currentTodo = JSON.parse(localStorage.getItem(fromProject)).todos[i];
        
            const todo = document.createElement('div');
            todo.setAttribute('class', 'todo');
            todo.setAttribute('data-project', `${fromProject}`);
            todo.setAttribute('data-id', `${i}`);

            // LHS
            const lhs = document.createElement('div');
            lhs.setAttribute('class', 'lhs');
            lhs.innerHTML = 
            `
                <input type="checkbox">
                <p class="title-todo">${currentTodo.title}</p>  
            `;
            todo.append(lhs);

            // RHS
            const rhs = document.createElement('div');
            rhs.setAttribute('class', 'rhs');

            let color;
            switch(currentTodo.priority)
            {
                case 'high':
                    color = 'red';
                    break;
                case 'medium':
                    color = 'orange';
                    break;
                case 'low':
                    color = 'green';
                    break;
            }

            rhs.innerHTML = 
            `
                <i class="far fa-flag" title="Priority" style = "color:${color}"></i>
                <i class="far fa-trash-alt" title="Delete todo"></i>
                <i class="far fa-edit" title="Edit"></i>
            `;
            todo.append(rhs);

            containerTodos.append(todo);
        }
    }

}

//Add todo to a project
const addTodo = (todo)=>{
    
    //If such a project doesn't exist we create it
    if(localStorage.getItem(todo.project) == null) 
    {
        const newProject = new Project(todo.project, [todo]);
        localStorage.setItem(todo.project, JSON.stringify(newProject));
    }

    //If there is such a project we add the todo to it 
    else 
    {
        let arr = JSON.parse(localStorage.getItem(todo.project)).todos;
        arr.push(todo);

        let newObject = JSON.parse(localStorage.getItem(todo.project));
        newObject.todos = arr;

        localStorage.setItem(newObject.name, JSON.stringify(newObject));
    }

    displayTodos('All');
}

const editTodo = (e)=>{

    const todoDiv = document.querySelector(`[data-project="${e.target.getAttribute('data-project')}"][data-id="${e.target.getAttribute('data-id')}"]`);
    const todoTitleDiv = todoDiv.childNodes[0].childNodes[3];

    const project = e.target.getAttribute('data-project');
    const id = e.target.getAttribute('data-id');

    const todoTitle = document.querySelector('#todoInput').value;
    const newProject = document.querySelector('#projectInput').value;
    
    const editedTodo = createTodo();
    const arr = JSON.parse(localStorage.getItem(project)).todos;

    //If we edit in the same project
    if(newProject == project)
    {    
        arr.splice(id, 1, editedTodo);
        let newObject = JSON.parse(localStorage.getItem(project));
        newObject.todos = arr;
    
        localStorage.setItem(newObject.name, JSON.stringify(newObject));
        
        todoTitleDiv.textContent = `${todoTitle}`
    }

    else
    {   
        arr.splice(id, 1);
        let newObject = JSON.parse(localStorage.getItem(project));
        newObject.todos = arr;
        localStorage.setItem(newObject.name, JSON.stringify(newObject));
        
        todoDiv.remove();

        addTodo(editedTodo);
    }


    input.forEach(element => {
        element.value = '';
    });
}

const deleteTodo = (e)=>{
    const project = e.target.parentNode.parentNode.getAttribute("data-project");
    let arr = JSON.parse(localStorage.getItem(project)).todos;

    const position = e.target.parentNode.parentNode.getAttribute("data-id");
    arr.splice(position, 1);
    
    let newObject = JSON.parse(localStorage.getItem(project));
    newObject.todos = arr;

    localStorage.setItem(newObject.name, JSON.stringify(newObject));
    e.target.parentNode.parentNode.remove();
    
    //Delete the project if there are no todos in it
    if(JSON.parse(localStorage.getItem(newObject.name)).todos.length == 0)
    {
        localStorage.removeItem(newObject.name);
    }

    e.target.parentNode.parentNode.remove();
}

export {addTodo, displayTodos, createTodo, editTodo, deleteTodo};
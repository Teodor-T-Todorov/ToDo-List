import {Todo, Project} from './objects'
const container = document.querySelector('.container');
const input = document.querySelectorAll('.input');


const createTodo = ()=>{
    const title = document.querySelector('#todoInput');
    const project = document.querySelector('#projectInput');
    const description = document.querySelector('#descriptionInput');
    const priority = document.querySelector('.priorities');
    return new Todo(title.value, project.value, description.value, priority.value);
}

const displayTodo = ()=>{

    Object.keys(localStorage).forEach(function(project){

        if(localStorage.length != 0)
        {
            const SIZE = JSON.parse(localStorage.getItem(project)).todos.length;

            for(let i = 0; i < SIZE; i++)
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
                rhs.innerHTML = 
                `
                    <i class="far fa-flag" title="Priority"></i>
                    <i class="far fa-trash-alt" title="Delete todo"></i>
                    <i class="far fa-edit" title="Edit"></i>
                `;
                todo.append(rhs);
    
                container.append(todo);
    
            }
        }
    });
}

const addTodo = (todo)=>{
    
    if(localStorage.getItem(todo.project) == null) //If such a project doesn't exist we create it
    {
        const newProject = new Project(todo.project, [todo]);
        localStorage.setItem(todo.project, JSON.stringify(newProject));
        displayTodo()
    }

    else //If there is such a project we add the todo to it 
    {
        let arr = JSON.parse(localStorage.getItem(todo.project)).todos;
        arr.push(todo);

        let newObject = JSON.parse(localStorage.getItem(todo.project));
        newObject.todos = arr;

        localStorage.setItem(newObject.name, JSON.stringify(newObject));

        displayTodo()
    }
}

const editTodo = (e)=>{ 
    const project = e.target.getAttribute('data-project');
    const id = e.target.getAttribute('data-id');
    const todo = JSON.parse(localStorage.getItem(project)).todos[id];

    //Change values
    todo.title = document.querySelector('#todoInput').value;
    todo.project = document.querySelector('#projectInput').value;
    todo.description = document.querySelector('#descriptionInput').value;
    todo.priority = document.querySelector('.priorities').value;

    //Change the array
    let arr = JSON.parse(localStorage.getItem(project)).todos;
    arr.splice(id, 1, todo);
    let newObject = JSON.parse(localStorage.getItem(project));
    newObject.todos = arr;

    localStorage.setItem(newObject.name, JSON.stringify(newObject));

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

}

export {addTodo, displayTodo, createTodo, editTodo, deleteTodo};
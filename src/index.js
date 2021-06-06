import {addTodo, displayAllTodos, displayTodosFromProject, displayTodo, createTodo, editTodo, deleteTodo} from './todos'
import {displayProjects, deleteProject} from './projects'
import notie from 'notie'

const navbar = document.querySelector('.navbar-container');
const popup = document.querySelector('.popup');
const btnAdd = document.querySelector('#btnAdd');
const btnEdit = document.querySelector('#btnEdit');
const containerTodos = document.querySelector('.containerTodos');
const containerProjects = document.querySelector('.containerProjects');
const input = document.querySelectorAll('.input');

window.addEventListener('load', () => {
    displayAllTodos();
    //localStorage.clear();
  });

navbar.addEventListener('click', (e)=>{ 

    //Load default page
    if (e.target.classList.contains('home') || e.target.id == 'home')
    {
        if(document.querySelector('.title').textContent != 'TO-DO LIST')
        {
            containerTodos.innerHTML = '';
            containerProjects.innerHTML = '';
            displayAllTodos();
        }
    }

    // Show pop-up to add todos
    else if(e.target.classList.contains('add') || e.target.id == 'add to-do')
    {
        popup.style.display = 'flex';
        btnAdd.style.display = 'block';

        if (document.querySelector('.title').textContent == 'TO-DO LIST')
        {
            document.querySelector('#projectInput').style.display = 'block';
        }
        else
        {
            document.querySelector('#projectInput').style.display = 'none';
        }

        input.forEach(element => {
            element.value = '';
        });
    }
    
    //Show projects
    else if (e.target.classList.contains('projects') || e.target.id == 'project')
    {
        containerTodos.innerHTML = '';
        displayProjects();
    }
})

popup.addEventListener('click', (e)=>{
    // Close pop-up
    if (e.target.className == 'popup')
    {
        popup.style.display = 'none';
        btnAdd.style.display = 'none';
        btnEdit.style.display = 'none';
        delete btnEdit.dataset.project;
        delete btnEdit.dataset.id;
    }

    // Add and display todo
    else if (e.target.id == 'btnAdd')
    {
        containerProjects.innerHTML = '';

        const todo = createTodo();
        addTodo(todo);

        popup.style.display = 'none';
        btnAdd.style.display = 'none';
    }

    else if (e.target.id == 'btnEdit')
    {
        editTodo(e);
        
        popup.style.display = 'none';
        btnEdit.style.display = 'none';
        
    }

})

containerTodos.addEventListener('click', (e)=>{

    if (e.target.className == 'todo' || e.target.className == 'lhs' || e.target.className == 'title-todo')
    {
        //Show info for TODO
    }
    
    // Delete todo
    else if (e.target.className == 'far fa-trash-alt')
    {
        notie.confirm({
            text: 'Do you want to delete this todo?',
            cancelText: 'No',
            submitCallback: () =>{
                deleteTodo(e)
            }
        })
    }

    // Edit todo
    else if (e.target.className == 'far fa-edit')
    {
        popup.style.display = 'flex';
        btnEdit.style.display = 'block';
        btnEdit.setAttribute('data-project', `${e.target.parentNode.parentNode.getAttribute('data-project')}`)
        btnEdit.setAttribute('data-id', `${e.target.parentNode.parentNode.getAttribute('data-id')}`)
    }

    // Complete todo
    else if (e.target.type == 'checkbox')
    {
        notie.confirm({
            text: 'Complete todo?',
            cancelText: 'No',
            submitCallback: () => {
                deleteTodo(e);
            },
            cancelCallback: () => {
                e.target.checked = false;
            }
        })
    }
})

containerProjects.addEventListener('click', (e)=>{

    if (e.target.className == 'project' || e.target.className == 'projectTitle')
    {
        containerProjects.innerHTML = '';
        const project = (e.target.className == 'project') ? e.target.getAttribute("data-project") : e.target.innerHTML;
        displayTodosFromProject(`${project}`)
    }

    else if (e.target.className == 'far fa-trash-alt iDelete')
    {
        notie.confirm({
            text: 'Delete project?',
            cancelText: 'No',
            submitCallback: () => {
                deleteProject(e.target.parentNode.getAttribute("data-project"));
            }
        })
    }
})


console.log(JSON.parse(localStorage.getItem('Study')))
console.log(JSON.parse(localStorage.getItem('Workout')))
console.log(localStorage)
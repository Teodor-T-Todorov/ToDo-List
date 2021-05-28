import {addTodo, displayTodos, createTodo, editTodo, deleteTodo} from './DOM'
import {displayProjects, deleteProject} from './projects'
import notie from 'notie'

const main = document.querySelector('main');
const navbar = document.querySelector('.navbar-container');
const popup = document.querySelector('.popup');
const btnAdd = document.querySelector('#btnAdd');
const btnEdit = document.querySelector('#btnEdit');
const containerTodos = document.querySelector('.containerTodos');
const containerProjects = document.querySelector('.containerProjects');
const input = document.querySelectorAll('.input');

window.addEventListener('load', () => {
    displayTodos('All');
    //localStorage.clear();
  });

navbar.addEventListener('click', (e)=>{ 

    //Load default page
    if(e.target.classList.contains('logo') || e.target.id == 'default')
    {
        containerProjects.innerHTML = '';
        displayTodos('All');
    }

    // Show pop-up to add todos
    else if(e.target.classList.contains('add') || e.target.id == 'add to-do')
    {
        popup.style.display = 'flex';
        btnAdd.style.display = 'block';

        input.forEach(element => {
            element.value = '';
        });
    }
    
    //Show projects
    else if(e.target.classList.contains('projects') || e.target.id == 'project')
    {
        containerTodos.innerHTML = '';
        displayProjects();
    }
})

popup.addEventListener('click', (e)=>{
    // Close pop-up
    if(e.target.className == 'popup')
    {
        popup.style.display = 'none';
        btnAdd.style.display = 'none';
        btnEdit.style.display = 'none';
        delete btnEdit.dataset.project;
        delete btnEdit.dataset.id;
    }

    // Add and display todo
    else if(e.target.id == 'btnAdd')
    {
        containerProjects.innerHTML = '';

        const todo = createTodo();
        addTodo(todo);

        popup.style.display = 'none';
        btnAdd.style.display = 'none';
    }

    else if(e.target.id == 'btnEdit')
    {
        editTodo(e);
        
        popup.style.display = 'none';
        btnEdit.style.display = 'none';
        
    }

})

main.addEventListener('click', (e)=>{
    if(e.target.id == 'title')
    {
        containerProjects.innerHTML = '';
        displayTodos('All');
    }
})

containerTodos.addEventListener('click', (e)=>{
    
    // Delete todo
    if(e.target.className == 'far fa-trash-alt')
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
    else if(e.target.className == 'far fa-edit')
    {
        popup.style.display = 'flex';
        btnEdit.style.display = 'block';
        btnEdit.setAttribute('data-project', `${e.target.parentNode.parentNode.getAttribute('data-project')}`)
        btnEdit.setAttribute('data-id', `${e.target.parentNode.parentNode.getAttribute('data-id')}`)
    }

    // Complete todo
    else if(e.target.type == 'checkbox')
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
    console.log(e.target)
    if(e.target.className == 'project' || e.target.className == 'projectTitle')
    {
        containerProjects.innerHTML = '';
        const project = (e.target.className == 'project') ? e.target.getAttribute("data-project") : e.target.innerHTML;
        displayTodos(`${project}`)
    }

    else if(e.target.className == 'far fa-trash-alt iDelete')
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



//console.log('retrievedObject: ', JSON.parse(localStorage.getItem("Study")))
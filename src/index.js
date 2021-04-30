import {addTodo, displayTodo} from './DOM'
import Todo from './objects'
import notie from 'notie'

const navbar = document.querySelector('.navbar-container');
const popup = document.querySelector('.popup');
const btnAdd = document.querySelector('#btnAdd');
const btnEdit = document.querySelector('#btnEdit');
const container = document.querySelector('.container');

displayTodo();

navbar.addEventListener('click', (e)=>{ 

    // Show pop-up to add
    if(e.target.classList.contains('add') || e.target.className == 'link-text')
    {
        popup.style.display = 'flex';
        btnAdd.style.display = 'block';

    }
    
    else if(e.target.className == 'projects')
    {
        // See projects
    }
})

popup.addEventListener('click', (e)=>{
    // Close pop-up
    if(e.target.className == 'popup')
    {
        popup.style.display = 'none';
        btnAdd.style.display = 'none';
        btnEdit.style.display = 'none';
        
    }

    //Add and display todo
    if(e.target.className == 'addtodo')
    {
        const title = document.querySelector('#todoInput');
        const project = document.querySelector('#projectInput');
        const description = document.querySelector('#descriptionInput');
        const priority = document.querySelector('.priorities');
        
        const todo = new Todo(title.value, project.value, description.value, priority.value);

        addTodo(todo);
        popup.style.display = 'none';
    }
})

container.addEventListener('click', (e)=>{
    //Delete todo
    if(e.target.className == 'far fa-trash-alt')
    {
        notie.confirm({
            text: 'Do you want to delete this todo?',
            cancelText: 'No',
            submitCallback: () =>{
                localStorage.removeItem(e.target.parentNode.parentNode.id - 1);
                e.target.parentNode.parentNode.remove();
            }
        })
    }

    //Edit todo
    else if(e.target.className == 'far fa-edit')
    {
        popup.style.display = 'flex';
        btnEdit.style.display = 'block';
    }

    //Complete todo
    else if(e.target.type == 'checkbox')
    {
        notie.confirm({
            text: 'Complete todo?',
            cancelText: 'No',
            submitCallback: () => {
                localStorage.removeItem(e.target.parentNode.parentNode.id - 1);
                e.target.parentNode.parentNode.remove();
            },
            cancelCallback: () => {
                e.target.checked = false;
            }
        })
    }
})

console.log(localStorage)
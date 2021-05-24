import {addTodo, displayTodo, createTodo, editTodo, deleteTodo} from './DOM'
import notie from 'notie'

const navbar = document.querySelector('.navbar-container');
const popup = document.querySelector('.popup');
const btnAdd = document.querySelector('#btnAdd');
const btnEdit = document.querySelector('#btnEdit');
const container = document.querySelector('.container');
const input = document.querySelectorAll('.input');

window.addEventListener('load', () => {
    displayTodo();
    //localStorage.clear();
  });

navbar.addEventListener('click', (e)=>{ 

    // Show pop-up to add todos
    if(e.target.classList.contains('add') || e.target.id == 'add to-do')
    {
        popup.style.display = 'flex';
        btnAdd.style.display = 'block';

        input.forEach(element => {
            element.value = '';
        });
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

    // Add and display todo
    else if(e.target.id == 'btnAdd')
    {
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

container.addEventListener('click', (e)=>{
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

console.log(JSON.parse(localStorage.getItem('Study')))
console.log(JSON.parse(localStorage.getItem('Workout')))
console.log(localStorage)



//console.log('retrievedObject: ', JSON.parse(localStorage.getItem("Study")))
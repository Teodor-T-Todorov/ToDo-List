import displayTodo from './DOM'
import Todo from './objects'

const navbar = document.querySelector('.navbar-container');
const popup = document.querySelector('.popup');

navbar.addEventListener('click', (e)=>{ 

    // Show pop-up
    if(e.target.classList.contains('add') || e.target.className == 'link-text')
    {
        popup.style.display = 'flex';
    }
    
    else if(e.target.className == 'projects')
    {
        // See projects
    }
})

popup.addEventListener('click', (e)=>{
    // Close pop-up
    if(e.target.id == 'popup')
    {
        popup.style.display = 'none';
    }

    if(e.target.className == 'addtodo')
    {
        // Display todo
        let todo = new Todo('kurec', 'aa', 'dd','dd');
        displayTodo(todo);
        
        // Add to database
    }
})
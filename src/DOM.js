const container = document.querySelector('.container');

const addTodo = (object)=>{
    localStorage.setItem(`${localStorage.length}`, JSON.stringify(object))

    const todo = document.createElement('div');
    todo.setAttribute('class', 'todo');
    todo.setAttribute('id', `${localStorage.length}`)

    // LHS
    const lhs = document.createElement('div');
    lhs.setAttribute('class', 'lhs');
    lhs.innerHTML = 
    `
        <input type="checkbox">
        <p class="title-todo">${object.title}</p>  
    `;
    todo.append(lhs);

    // RHS
    const rhs = document.createElement('div');
    rhs.setAttribute('class', 'rhs');
    rhs.innerHTML = 
    `
        <i class="far fa-flag title="Priority"></i>
        <i class="far fa-trash-alt title="Delete todo"></i>
        <i class="far fa-edit" title="Edit"></i>
    `;
    todo.append(rhs);

    container.append(todo);
}

const displayTodo = ()=>{
    Object.keys(localStorage).forEach((key) =>{
        let currentObject = localStorage.getItem(key);

        const todo = document.createElement('div');
        todo.setAttribute('class', 'todo');
        todo.setAttribute('id', `${localStorage.length}`)
    
        // LHS
        const lhs = document.createElement('div');
        lhs.setAttribute('class', 'lhs');
        lhs.innerHTML = 
        `
            <input type="checkbox">
            <p class="title-todo">${JSON.parse(currentObject).title}</p>  
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
    })
}

export {addTodo, displayTodo};
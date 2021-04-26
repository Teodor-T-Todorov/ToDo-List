const container = document.querySelector('.container');

function displayTodo(object){
    const todo = document.createElement('div');
    todo.setAttribute('class', 'todo');

    // LHS
    const lhs = document.createElement('div');
    lhs.setAttribute('class', 'lhs')

    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    lhs.append(checkbox);

    const title = document.createElement('p');
    title.setAttribute('class', 'title-todo');
    title.innerHTML = object.title; // ???
    lhs.append(title);

    todo.append(lhs);

    // RHS
    const rhs = document.createElement('div');
    rhs.setAttribute('class', 'rhs')
    rhs.innerHTML = `
    <div class="rhs">
        <i class="fas fa-flag"></i>
        <i class="far fa-trash-alt"></i>
    </div>`;

    todo.append(rhs);

    container.append(todo);
}

export default displayTodo;
//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//event listeners
todoButton.addEventListener('click', addTodo);

//funtions
function addTodo(event){
    event.preventDefault();
    
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");

    const newTodo = document.createElement('li');

    if(todoInput.value = ' '){
        return;
    }

    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-button");
    todoDiv.appendChild(completedButton);

    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-button");
    todoDiv.appendChild(trashButton);

    todoList.appendChild(todoDiv);

    todoInput.value = '';
}
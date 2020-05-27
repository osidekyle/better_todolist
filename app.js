//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list ');


//Event Listeners
todoButton.addEventListener('click',addTodo)



//Functions

function addTodo(event){
    //Prevent form submission
    event.preventDefault();

    //Create todo div    
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    //Create LI
    const newTodo = document.createElement('li');
    newTodo.innertext='hey'
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //Check Mark Button
    const completedButton = document.createElement('button');
    completedButton.innerHTML='<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    tododiv.appendChild(completedButton);


    //Trash Button
    const trashButton = document.createElement('button');
    trashButton.innerHTML='<i class="fas fa-check"></i>';
    trashButton.classList.add('trash-btn');
    tododiv.appendChild(trashButton);

}
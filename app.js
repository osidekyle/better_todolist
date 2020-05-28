//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption=document.querySelector('.filter-todo');

//Event Listeners
todoButton.addEventListener('click',addTodo)
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click',filterToDo);



//Functions

function addTodo(event){
    //Prevent form submission
    event.preventDefault();

    //Create todo div    
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    //Create LI
    const newTodo = document.createElement('li');
    newTodo.innerText=todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    
    //Add todo to storage
    saveLocalTodos(todoInput.value);

    //Check Mark Button
    const completedButton = document.createElement('button');
    completedButton.innerHTML='<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);


    //Trash Button
    const trashButton = document.createElement('button');
    trashButton.innerHTML='<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    //Append to list
    todoList.appendChild(todoDiv);

    //Clear todoInput value
    todoInput.value="";

}

function deleteCheck(e){
    const item = e.target;
    //Delete todo
    if(item.classList[0]==='trash-btn'){
        const todo=item.parentElement;
        //Animation
        todo.classList.add('fall');
        todo.addEventListener('transitionend',function(){
            todo.remove();
        });
        
    }


    //Check mark button
    if(item.classList[0]==="complete-btn"){
        const todo =item.parentElement;
        todo.classList.toggle('completed');
    }
}

function filterToDo(e){
    const todos=todoList.childNodes;
    const todoa=Array.from(todos);
    todoa.slice(1,).forEach(function(todo){
        switch (e.target.value){
            case 'all':
                todo.style.display='flex';
                break;
            case 'completed':
                if(todo.classList.contains('completed')){
                    todo.style.display='flex';
                }
                else{
                    todo.style.display="none";
                }
                break;
            case 'uncompleted':
                if(!todo.classList.contains('completed')){
                    todo.style.display='flex';
                }
                else{
                    todo.style.display='none';
                }
                break;
                
            
        }
    });

}


function saveLocalTodos(todo){
    //Check if already have local todos with todos inside
    let todos;
    if(localStorage.getItem('todos')===null){
        todos=[];

    }
    else{
        todos=JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem('todos',JSON.stringify(todos));
}
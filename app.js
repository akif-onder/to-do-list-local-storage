const form = document.querySelector('.todo_form');
const input = document.querySelector('.todo_input');

const todoContainer = document.querySelector('.todo_container');

const addHTML = (todo) =>{
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    const todoLeft = document.createElement('div');
    todoLeft.classList.add('todo_left');
    
    const todoCheckBox = document.createElement('input');
    todoCheckBox.type = 'checkbox';
    todoCheckBox.checked = todo.isCompleted;
    todoCheckBox.classList.add('todo_checkbox');

    const todoText = document.createElement('span');
    todoText.classList.add('todo_text');
    todoText.textContent = todo.text;

    todoLeft.appendChild(todoCheckBox);
    todoLeft.appendChild(todoText);

    const todoRight = document.createElement('div');
    todoRight.classList.add('todo_right');

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('todo_delete');
    deleteBtn.textContent = 'Delete';

    const editBtn = document.createElement('button');
    editBtn.classList.add('todo_edit');
    editBtn.textContent = 'Edit';

    todoRight.appendChild(deleteBtn);
    todoRight.appendChild(editBtn);
    


    todoDiv.appendChild(todoLeft);
    todoDiv.appendChild(todoRight);

    todoContainer.appendChild(todoDiv);
};

const startConf = () => {
    //This function will operate and get items from the local storage when the page first loaded.

    // Start configs below...
    const todos =JSON.parse(localStorage.getItem('todos'));

    if (!todos) {
        localStorage.setItem('todos', JSON.stringify([]));
    }else{
        todos.forEach(todo => {
            addHTML(todo);
        });
    }
};

startConf();

const addTodo = (e) => {
    e.preventDefault(); // when a form is submitted the page is reloaded by default. this function prevents this behavior.
    
   const inputValue = input.value;

    const todo = {
        text: inputValue,
        isCompleted: false,
    }

    const todos = JSON.parse(localStorage.getItem('todos'));
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));

        

   addHTML(todo);

   form.reset();


    
    

};

form.addEventListener('submit', addTodo);

const form = document.querySelector('.todo_form');
const input = document.querySelector('.todo_input');


const startConf = () => {
    //This function will operate and get items from the local storage when the page first loaded.

    // Start configs below...
    const todos =localStorage.getItem('todos');

    if (!todos) {
        localStorage.setItem('todos', JSON.stringify([]));
    }
};

startConf();

const addTodo = (e) => {
    e.preventDefault(); // when a form is submitted the page is reloaded by default. this function prevents this behavior.
    
    todoText = input.value;

    const todo = {
        text: todoText,
        isCompleted: false,
    }

    const todos = localStorage.getItem('todos');
   

};

form.addEventListener('submit', addTodo);
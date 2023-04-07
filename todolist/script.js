const form = document.querySelector('#todo-form');
const input = document.querySelector('#todo-input');
const list = document.querySelector('#todo-list');

let todos = [];

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const newTodo = input.value.trim();
  if (newTodo === '') return;
  todos.push({ task: newTodo, completed: false });
  displayTodos();
  input.value = '';
});

function displayTodos() {
  list.innerHTML = '';
  for (let i = 0; i < todos.length; i++) {
    const todo = todos[i];
    const li = document.createElement('li');
    li.innerHTML = `
      <input type="checkbox" ${todo.completed ? 'checked' : ''}>
      <span class="${todo.completed ? 'completed' : ''}">${todo.task}</span>
      <button class="delete-btn">X</button>
    `;
    list.appendChild(li);
  }
}

list.addEventListener('click', (event) => {
  if (event.target.tagName === 'INPUT') {
    const index = [...list.children].indexOf(event.target.parentNode);
    todos[index].completed = !todos[index].completed;
    displayTodos();
  } else if (event.target.classList.contains('delete-btn')) {
    const index = [...list.children].indexOf(event.target.parentNode);
    todos.splice(index, 1);
    displayTodos();
  }
});

displayTodos();

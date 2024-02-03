import todosFromServer from '../../api/todos.json';

export * from './TodoInfo';

const todos = document.querySelectorAll('TodoInfo');

for (let i = 0; i < todos.length; i + 1) {
  if (todosFromServer[i].completed === true) {
    todos[i].classList.add('TodoInfo--completed');
  }
}

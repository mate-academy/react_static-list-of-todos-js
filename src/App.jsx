import './App.scss';

import todosFromServer from './api/todos.json';
import usersFromServer from './api/users.json';
import { TodoList } from './components/TodoList';

function getUserById(userId) {
  // Метод 'find()' повертає перший елемент масиву,
  // для якого умова у колбек-функції повертає true
  return usersFromServer.find(user => user.id === userId) || null;
}

// Об'єднуємо todos з users за їхнім userId
export const todos = todosFromServer.map(todo => ({
  ...todo,
  user: getUserById(todo.userId),
}));

export const App = () => (
  <div className="App">
    <h1 className="App__title">Static list of todos</h1>

    <TodoList todos={todos} />
  </div>
);

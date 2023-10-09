import './App.scss';

import todosFromServer from './api/todos.json';
import usersFromServer from './api/users.json';

import { TodoList } from './components/TodoList';

function getUserById(userId) {
  return usersFromServer.find(user => user.id === userId) || null;
}

export const preparedTodos = todosFromServer.map(todo => ({
  ...todo,
  user: getUserById(todo.userId),
}));

export const App = () => (
  <div className="App">
    <h1 className="App__title">Static list of todos</h1>
    <TodoList todos={preparedTodos} />
  </div>
);

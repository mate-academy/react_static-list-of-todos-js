import todosFromServer from './api/todos.json';
import usersFromServer from './api/users.json';

import { TodoList } from './components/TodoList/TodoList';

import './App.scss';

function getUserById(userId) {
  return usersFromServer.find(person => person.id === userId) || null;
}

export const todos = todosFromServer.map(item => ({
  ...item,
  user: getUserById(item.userId),
}));

export const App = () => (
  <div className="App">
    <h1 className="App__title">Static list of todos</h1>

    <TodoList todos={todos} />
  </div>
);

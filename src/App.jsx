import './App.scss';

import todosFromServer from './api/todos.json';
import usersFromServer from './api/users.json';
import { TodoInfo } from './components/TodoInfo';

function getUserById(userId) {
  return usersFromServer.find(user => user.id === userId)
      || null;
}

export const todos = todosFromServer.map(todo => ({
  ...todo,
  user: getUserById(todo.userId),
}));

export const App = () => (
  <div className="App">
    <h1 className="App__title">Static list of todos</h1>
    {todos.map(todo => (<TodoInfo todo={todo} key={todo.id} />))}
  </div>
);

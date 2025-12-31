import './App.scss';

import todosFromServer from './api/todos.json';
import usersFromServer from './api/users.json';

import { TodoList } from './components/TodoList/TodoList';

function getUserById(userId, users) {
  return users.find(user => user.id === userId) || null;
}

export const App = () => {
  const todos = todosFromServer.map(todo => ({
    ...todo,
    user: getUserById(todo.userId, usersFromServer),
  }));

  return (
    <div className="App">
      <h1 className="App__title">Static list of todos</h1>
      <TodoList todos={todos} />
    </div>
  );
};

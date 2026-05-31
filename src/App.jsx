import './App.scss';
import { TodoList } from './components/TodoList';

import todosFromServer from './api/todos.json';
import usersFromServer from './api/users.json';

const todos = todosFromServer.map(todo => ({
  ...todo,
  user: usersFromServer.find(user => user.id === todo.userId),
}));

export const App = () => (
  <div className="App">
    <h1 className="App__title">Static list of todos</h1>

    <TodoList todos={todos} />
  </div>
);

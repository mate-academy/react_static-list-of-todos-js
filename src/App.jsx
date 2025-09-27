import './App.scss';
import todosFromServer from './api/todos.json';
import { TodoList } from './components/TodoList';
import { getUserById } from './utils/getUserById';

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

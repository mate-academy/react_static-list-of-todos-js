import './App.scss';
import { TodoList } from './components/TodoList';

import todosFromServer from './api/todos.json';

export const App = () => (
  <div className="App">
    <h1 className="App__title">Static list of todos</h1>
    <TodoList todos={todosFromServer} />
  </div>
);

import './App.scss';

import { TodoList } from './components/TodoList/TodoList';
import { todos } from './components/todos/todos';

export const App = () => (
  <div className="App">
    <h1 className="App__title">Static list of todos</h1>
    <TodoList todos={todos} />
  </div>
);

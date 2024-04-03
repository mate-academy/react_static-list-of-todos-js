import './App.scss';

import { todos } from './api/todosWithUser';
import { TodoList } from './components/TodoList';

export const App = () => (
  <div className="App">
    <h1 className="App__title">Static list of todos</h1>

    <TodoList todos={todos} />
  </div>
);

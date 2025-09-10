
import './App.scss';
import { TodoList } from './components/TodoList/TodoList';
import todosFromServer from './api/todos.json';
import usersFromServer from './api/users.json';

const todos = todosFromServer.map(todo => ({
  ...todo,
  user: usersFromServer.find(user => user.id === todo.userId),
}));

export const App = () => (
  <div className="page">
    <div className="sidebar" data-cy="Sidebar">
      Sidebar
    </div>

    <div className="page-content">
      <TodoList todos={todos} />
    </div>
  </div>
);


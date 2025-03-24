import './App.scss';
import { TodoList } from './components/TodoList/TodoList';
import todosFromServer from './api/todos.json';

function getUserById(userId) {
  return todosFromServer.find(user => user.id === userId) || null;
}

export const todos = todosFromServer.map(todo => ({
  ...todo,
  user: getUserById(todo.userId),
}));

export const App = () => {
  return (
    <div className="App">
      <TodoList todos={todos} />
    </div>
  );
};

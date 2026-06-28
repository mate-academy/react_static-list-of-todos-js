import { TodoList } from './components/TodoList';
import todosFromServer from './api/todos.json';
import usersFromServer from './api/users.json';

export const App = () => {
  // Attach user to each todo
  const todos = todosFromServer.map(todo => ({
    ...todo,
    user: usersFromServer.find(user => user.id === todo.userId),
  }));

  return (
    <div className="App">
      <h1>TODO List</h1>
      <TodoList todos={todos} />
    </div>
  );
};

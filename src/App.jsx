import todosFromServer from './api/todos.json';
import usersFromServer from './api/users.json';

import { TodoList } from './components/TodoList/TodoList';

const preparedTodos = todosFromServer
  .slice(0, 2) // ⬅ only first two todos
  .map(todo => ({
    ...todo,
    user: usersFromServer.find(user => user.id === todo.userId),
  }));

export const App = () => {
  return (
    <div className="App">
      <h1 className="App__title">Static list of todos</h1>
      <TodoList todos={preparedTodos} />
    </div>
  );
};

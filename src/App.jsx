import './App.scss';
import { TodoList } from './components/TodoList/TodoList';

import todosFromServer from './api/todos.json';
import usersFromServer from './api/users.json';
export const App = () => {
  const todos = todosFromServer.map(todo => {
    const user = usersFromServer.find(u => u.id === todo.userId);

    return {
      ...todo,
      user,
    };
  });

  return (
    <div className="App">
      <h1>Todos</h1>

      <TodoList todos={todos} />
    </div>
  );
};

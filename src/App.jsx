import './App.scss';

import todos from './api/todos.json';
import users from './api/users.json';
import { TodoList } from './components/TodoList';

const preparedTodos = todos.map(todo => {
  const user = users.find(person => person.id === todo.userId);

  return {
    ...todo,
    user,
  };
});

export const App = () => (
  <div className="App">
    <TodoList todos={preparedTodos} />
  </div>
);

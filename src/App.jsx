import './App.scss';

import todos from './api/todos.json';
import users from './api/users.json';
import { TodoList } from './components/TodoList/TodoList';

function getUserById(userId) {
  return users.find(user => user.id === userId) || null;
}

export const App = () => {
  const todosWithUsers = todos.map(todo => ({
    ...todo,
    user: getUserById(todo.userId),
  }));

  return (
    <div className="App">
      <h1 className="App__title">Static list of todos</h1>
      <TodoList todos={todosWithUsers} />
    </div>
  );
};

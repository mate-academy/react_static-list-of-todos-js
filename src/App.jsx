import React from 'react';
import todosFromServer from './api/todos.json';
import usersFromServer from './api/users.json';
import { TodoList } from './components/TodoList';

const todos = todosFromServer.map(todo => ({
  ...todo,
  user: usersFromServer.find(user => user.id === todo.userId) || null,
}));

export const App = () => {
  return (
    <div className="App">
      <h1>Static list of todos</h1>

      <TodoList todos={todos} />
    </div>
  );
};

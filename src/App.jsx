import React from 'react';
import './App.scss';

import todosFromServer from './api/todos.json';
import usersFromServer from './api/users.json';

import { TodoList } from './components/TodoList';

function getUser(userId) {
  const foundUser = usersFromServer.find(user => user.id === userId || null);

  return foundUser;
}

export const todos = todosFromServer.map(todo => ({
  ...todo,
  user: getUser(todo.userId),
}));

export const App = () => (
  <div className="App">
    <h1 className="App__title">Static list of todos</h1>

    <TodoList todos={todos} />
  </div>
);

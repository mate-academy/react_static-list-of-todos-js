import React from 'react';
import { todosFromServer, usersFromServer } from './api';
import { TodoList } from './components/TodoList/TodoList';

const todos = todosFromServer.map(todo => ({
  ...todo,
  user: usersFromServer.find(user => user.id === todo.userId),
}));

export const App = () => (
  <div className="App">
    <h1>Static list of todos</h1>
    <TodoList todos={todos} />
  </div>
);
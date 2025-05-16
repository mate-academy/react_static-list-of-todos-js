import React from 'react';
import todosFromServer from './api/todos.json';
import usersFromServer from './api/users.json';
import { TodoList } from './components/TodoList';
import './App.scss';

const todos = todosFromServer.map(todo => ({
  ...todo,
  user: usersFromServer.find(user => user.id === todo.userId),
}));

export const App = () => (
  <div className="App">
    <h1 className="App__title">Static list of TODOs</h1>
    <TodoList todos={todos} />
  </div>
);

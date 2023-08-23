import React from 'react';
import todosFromServer from './api/todos.json';
import usersFromServer from './api/users.json';
import './App.scss';
import TodoList from './components/TodoList/TodoList';

function getUserById(userId) {
  return usersFromServer.find(user => user.id === userId) || null;
}

const todosWithUsers = todosFromServer.map(todo => ({
  ...todo,
  user: getUserById(todo.userId),
}));

export const App = () => (
  <div className="App">
    <h1 className="App__title">Static list of todos</h1>
    <TodoList todos={todosWithUsers} />
  </div>
);

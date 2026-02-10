import React from 'react';
import './App.scss';
import todosFromServer from './api/todos.json';
import usersFromServer from './api/users.json';
import { TodoList } from './components/TodoList';

const todosWithUsers = todosFromServer.map(todo => ({
  ...todo,
  user: usersFromServer.find(user => user.id === todo.userId),
}));

export const App = () => {
  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Todo List</h1>

        <TodoList todos={todosWithUsers} />
      </div>
    </div>
  );
};

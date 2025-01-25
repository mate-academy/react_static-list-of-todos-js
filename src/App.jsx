import React from 'react';
import { TodoList } from './components/TodoList';
import todosFromServer from './api/todos.json';
import usersFromServer from './api/users.json';
import './App.scss';

const App = () => {
  const todos = todosFromServer.map(todo => ({
    ...todo,
    user: usersFromServer.find(user => user.id === todo.userId),
  }));

  return (
    <div className="App">
      <h1 className="App__header">My Todos</h1>
      <TodoList todos={todos} />
    </div>
  );
};

export default App;

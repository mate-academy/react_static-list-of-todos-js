import React from 'react';
import './App.scss';
import todosFromServer from './api/todos.json';
import usersFromServer from './api/users.json';
import { TodoList } from './components/TodoList/TodoList';

// Зв'язуємо кожне завдання з відповідним користувачем за userId
const todosWithUsers = todosFromServer.map(todo => ({
  ...todo,
  user: usersFromServer.find(user => user.id === todo.userId),
}));

export const App = () => {
  return (
    <div className="App">
      <h1 className="App__title">Static List of TODOs</h1>
      <TodoList todos={todosWithUsers} />
    </div>
  );
};

export default App;
import React from 'react';
import TodoList from './components/TodoList';
import todos from './api/todos.json';
import users from './api/users.json';

const App = () => {
  return (
    <div className="App">
      <TodoList todos={todos} users={users} />
    </div>
  );
};

export default App;

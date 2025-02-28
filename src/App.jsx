import './App.scss';

import todosFromServer from './api/todos.json';
import usersFromServer from './api/users.json';
import { TodoList } from './components/TodoList';

function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoList todos={todosFromServer} users={usersFromServer} />
    </div>
  );
}

export default App;

// src/App.jsx
import { todos } from './todos';
import { TodoList } from './components/TodoList/TodoList';

function App() {
  return <TodoList todos={todos} />;
}

export default App;

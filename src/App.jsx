// src/App.jsx
import { todos } from './todos';
import { TodoList } from './components/TodoList/TodoList';

export function App() {
  return <TodoList todos={todos} />;
}

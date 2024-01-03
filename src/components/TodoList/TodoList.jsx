import { TodoInfo } from '../TodoInfo';

// Add the required props

export function TodoList({ todos }) {
  if (!todos || todos.length === 0) {
    return null;
  }

  return (
    <section className="TodoList">
      {todos.map(todo => (
        <TodoInfo key={todo.id} todo={todo} />
      ))}
    </section>
  );
}

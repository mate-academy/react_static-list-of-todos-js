import { TodoInfo } from '../TodoInfo';

// Add the required props
export const TodoList = ({ todos }) => (
  <section className="TodoList">
    {todos.length
      ? todos.map(todo => <TodoInfo key={todo.id} todo={todo} />)
      : ''}
  </section>
);

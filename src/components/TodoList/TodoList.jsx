import { TodoInfo } from '../TodoInfo';

export const TodoList = ({ todos }) => (
  <section className="TodoList">
    {todos.map(a => (
      <TodoInfo key={a.id} todo={a} />
    ))}
  </section>
);

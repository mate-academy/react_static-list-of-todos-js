import { TodoInfo } from '../TodoInfo/TodoInfo';

export const TodoList = ({ todos }) => (
  <section className="TodoList">
    {todos.map(t => (
      <TodoInfo key={t.id} todo={t} />
    ))}
  </section>
);

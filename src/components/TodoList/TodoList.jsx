import { TodoInfo } from '../TodoInfo';

export const TodoList = ({ todos }) => (
  <section className="TodoList">
    {todos.map(item => (
      <TodoInfo key={todos.id} todo={item} />
    ))}
  </section>
);

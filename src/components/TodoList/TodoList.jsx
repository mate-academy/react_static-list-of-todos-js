import { TodoInfo } from '../TodoInfo';

export const TodoList = ({ todos }) => (
  <section className="TodoList">
    {todos.map(todo => (
      <li><TodoInfo key={todo.id} todo={todo} /></li>
    ))}
  </section>
);

import { TodoInfo } from '../TodoInfo';

export const TodoList = ({ preparedTodos }) => (
  <section className="TodoList">
    {preparedTodos.map(todo => (
      <TodoInfo key={todo.id} todo={todo} />
    ))}
  </section>
);

import { TodoInfo } from '../TodoInfo/TodoInfo';

export const TodoList = ({ todos }) => (
  <section className="TodoList">
    {todos.map(({ id, ...todo }) => (
      <TodoInfo todo={todo} key={id} />
    ))}
  </section>
);

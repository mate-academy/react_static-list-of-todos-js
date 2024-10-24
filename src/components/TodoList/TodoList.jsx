import { TodoInfo } from '../TodoInfo/TodoInfo';

export const TodoList = ({ todos }) => (
  <section className="TodoList">
    {todos.map(el => (
      <TodoInfo todo={el} key={el.id} />
    ))}
  </section>
);

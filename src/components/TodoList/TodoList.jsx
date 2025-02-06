import { TodoInfo } from '../TodoInfo/TodoInfo';

export const TodoList = ({ todos }) => (
  <section className="TodoList">
    {todos.map(item => (
      <TodoInfo todo={item} key={item.id} />
    ))}
  </section>
);

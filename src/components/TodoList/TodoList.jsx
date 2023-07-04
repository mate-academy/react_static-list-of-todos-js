import { TodoInfo } from '../TodoInfo';

export const TodoList = ({ todos }) => (
  <section className="TodoList">
    {todos.map(listItem => (
      <TodoInfo todo={listItem} key={todos.key} />
    ))}
  </section>
);

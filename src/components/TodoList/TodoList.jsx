import { TodoInfo } from '../TodoInfo';

export const TodoList = ({ todos }) => (
  <section className="TodoList">
    {todos.map(todoItem => (
      <TodoInfo key={todoItem.id} todo={todoItem} />
    ))}
  </section>
);

import { TodoInfo } from '../TodoInfo/TodoInfo';

export const TodoList = ({ todos }) => (
  <section className="TodoList">
    {todos.map(Todo => (
      <TodoInfo todo={Todo} key={Todo.id} />
    ))}
  </section>
);

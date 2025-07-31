import { TodoInfo } from '../TodoInfo/TodoInfo';

// eslint-disable-next-line no-unused-vars
export const TodoList = ({ todos, users }) => (
  <section className="TodoList">
    {todos.map(todo => (
      <TodoInfo key={todo.id} todo={todo} />
    ))}
  </section>
);

import { TodoInfo } from '../TodoInfo';

export const TodoList = ({ todos }) => (
  <section className="TodoList">
    {todos.map(({ id, ...todo }) => (
      <TodoInfo
        key={id}
        todo={todo}
      />
    ))}
  </section>
);

import { TodoInfo } from '../TodoInfo';

export const TodoList = ({ todos, user }) => (
  <section className="TodoList">
    {todos.map(todo => (
      <TodoInfo todo={todo} user={user} />
    ))}
  </section>
);

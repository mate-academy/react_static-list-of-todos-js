import { TodoInfo } from '../TodoInfo';

export const TodoList = ({ todos, users }) => (
  <section className="TodoList">
    {todos.map(todo => (
      <article key={todo.id}>
        <TodoInfo todo={todo} user={todo.user} key={todo.user.id} />
      </article>
    ))}
  </section>
);

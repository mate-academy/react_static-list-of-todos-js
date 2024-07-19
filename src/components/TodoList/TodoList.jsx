import { TodoInfo } from '../TodoInfo/TodoInfo';

export const TodoList = ({ todos, users }) => (
  <section className="TodoList">
    {todos.map(todo => (
      <TodoInfo todo={todo} key={todo.id} />
    ))}
    {users.map(user => (
      <TodoInfo user={user} key={user.id} />
    ))}
  </section>
);

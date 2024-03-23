import { TodoInfo } from '../TodoInfo';

export const TodoList = ({ todos, users }) => (
  <section className="TodoList">
    {todos &&
      todos.map(todo => <TodoInfo todo={todo} users={users} key={todo.id} />)}
  </section>
);

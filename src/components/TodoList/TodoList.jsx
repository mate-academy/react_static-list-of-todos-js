import { TodoInfo } from '../TodoInfo/TodoInfo';

export const TodoList = ({ todos }, { users }) => (
  <section className="TodoList">
    {todos.map(todo => (
      <TodoInfo todos={todos} users={users} key={todo.id} />
    ))}
  </section>
);

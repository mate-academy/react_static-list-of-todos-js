import { TodoInfo } from '../TodoInfo';
import { UserInfo } from '../UserInfo';

export const TodoList = ({ todos }) => (
  <section className="TodoList">
    {todos.map(todo => (
      <TodoInfo todo={todo} todoId={todo.id} />
    ))}

    {/* {todos.map(todo => (
      <UserInfo todo={todo} todoId={todo.id} />
    ))} */}
  </section>
);

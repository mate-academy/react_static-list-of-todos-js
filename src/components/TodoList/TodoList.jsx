import { TodoInfo } from '../TodoInfo';

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

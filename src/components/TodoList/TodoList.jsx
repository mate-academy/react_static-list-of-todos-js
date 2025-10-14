import { TodoInfo } from '../TodoInfo/TodoInfo';
import { UserInfo } from '../UserInfo/UserInfo';

// Add the required props
export const TodoList = ({ todos }) => {
  return (
    <section className="TodoList">
      {todos.map(todo => (
        <TodoInfo key={todo.id} todo={todo}>
          <h2 className="TodoInfo__title">{todo.title}</h2>
          {todo.user && <UserInfo user={todo.user} />}
        </TodoInfo>
      ))}
    </section>
  );
};

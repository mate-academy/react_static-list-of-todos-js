// Add the required props
import { TodoInfo } from '../TodoInfo';
import { UserInfo } from '../UserInfo';

export const TodoList = ({todos}) => (
  <section className="TodoList">
    {todos.map(todo => (
      <TodoInfo
        key={todo.id}
        todo={todo}
        user={todo.user && <UserInfo user={todo.user} />}
      />
    ))}
  </section>
);

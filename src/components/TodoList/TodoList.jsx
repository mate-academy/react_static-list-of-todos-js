// Add the required props
import { TodoInfo } from '../TodoInfo';
import todos from '../../api/todos.json';
import users from '../../api/users.json';

export const TodoList = () => (
  <section className="TodoList">
    {todos.map(todo => (
      <TodoInfo
        key={todo.id}
        todo={todo}
        user={users.find(user => user.id === todo.userId)}
      />
    ))}
  </section>
);

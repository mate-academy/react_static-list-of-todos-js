// Add the required props
import { TodoInfo } from '../TodoInfo';

export const TodoList = ({ todos, users }) => (
  <section className="TodoList">
    {todos.map(todo => (
      <TodoInfo
        todo={todo}
        user={users.find(user => user.id === todo.userId)}
        key={todo.id}
      />
    ))}
  </section>
);

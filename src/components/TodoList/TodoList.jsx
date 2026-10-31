import { TodoInfo } from '../TodoInfo/TodoInfo';
import usersFromServer from '../../api/users.json';

export function getUserById(userId) {
  return usersFromServer.find(user => user.id === userId) || null;
}

export const TodoList = ({ todos }) => (
  <section className="TodoList">
    {todos.map(todo => (
      <TodoInfo
        key={todo.id}
        todo={{
          ...todo,
          user: getUserById(todo.userId),
        }}
      />
    ))}
  </section>
);

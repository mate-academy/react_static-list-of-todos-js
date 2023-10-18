import todosFromServer from '../../api/todos.json';
import usersFromServer from '../../api/users.json';
import { TodoInfo } from '../TodoInfo';

function getUserById(userId) {
  return usersFromServer.find(user => user.id === userId)
      || null;
}

const todos = todosFromServer.map(todo => ({
  ...todo,
  user: getUserById(todo.userId),
}));

export const TodoList = () => (
  <section className="TodoList">
    {todos.map(todo => (
      <TodoInfo todo={todo} key={todo.id} />
    ))}
  </section>
);

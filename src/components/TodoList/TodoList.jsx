import { TodoInfo } from '../TodoInfo';
import usersFromServer from '../../api/users.json';

function getUserById(userId) {
  return usersFromServer.find(user => user.id === userId) || null;
}

export const TodoList = ({ todos }) => {
  return (
    <>
      <section className="TodoList">
        {todos.map(todo => {
          const user = getUserById(todo.userId);

          return <TodoInfo todo={{ ...todo, user }} key={todo.id} />;
        })}
      </section>
    </>
  );
};

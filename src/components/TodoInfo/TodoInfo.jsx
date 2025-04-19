import { UserInfo } from '../UserInfo/UserInfo';
import usersFromServer from '../../api/users.json';
import './TodoInfo.scss';

function getUserById(userId) {
  return usersFromServer.find(user => user.id === userId) || null;
}

export const TodoInfo = ({ todo }) => {
  const user = getUserById(todo.userId);

  return (
    <article
      className={`TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`}
    >
      <h2 className="TodoInfo__title">{todo.title}</h2>

      <UserInfo user={user} />
    </article>
  );
};

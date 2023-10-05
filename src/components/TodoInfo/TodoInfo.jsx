import { UserInfo } from '../UserInfo';
import usersFromServer from '../../api/users.json';

function getUserById(userId) {
  return usersFromServer.find(user => user.id === userId)
      || null;
}

export const TodoInfo = ({
  todo: {
    userId,
    completed,
    title,
  },
}) => {
  const user = getUserById(userId);

  return (
    <article className={`TodoInfo ${completed === true ? 'TodoInfo--completed' : ''}`}>
      <h2 className="TodoInfo__title">{`${title}`}</h2>

      <UserInfo user={user} />
    </article>
  );
};

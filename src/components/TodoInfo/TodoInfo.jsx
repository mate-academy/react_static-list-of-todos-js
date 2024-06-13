import classNames from 'classnames';
import usersFromServer from '../../api/users.json';
import { UserInfo } from '../UserInfo/UserInfo';

function getUserById(userId) {
  return usersFromServer.find(user => user.id === userId) || null;
}

export const TodoInfo = ({ todo }) => {
  const { userId, completed, title } = todo;

  return (
    <>
      <article
        className={classNames('TodoInfo', { 'TodoInfo--completed': completed })}
      >
        <h2 className="TodoInfo__title">{title}</h2>

        {getUserById(userId) && <UserInfo user={getUserById(userId)} />}
      </article>
    </>
  );
};

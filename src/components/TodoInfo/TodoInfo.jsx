import classNames from 'classnames';
import { UserInfo } from '../UserInfo';
import usersFromServer from '../../api/users.json';

export const TodoInfo = ({ todo }) => {
  function getUserById(userId) {
    return usersFromServer.find(user => user.id === userId) || null;
  }

  return (
    <article
      className={classNames('TodoInfo', {
        'TodoInfo--completed': todo.completed,
      })}
    >
      <h2 className="TodoInfo__title">{todo.title}</h2>

      {getUserById(todo.userId) && <UserInfo user={getUserById(todo.userId)} />}
    </article>
  );
};

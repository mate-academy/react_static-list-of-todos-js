import './TodoInfo.scss';
import cn from 'classnames';
import { UserInfo } from '../UserInfo/UserInfo';
import usersFromServer from '../../api/users.json';

function getUserById(userId) {
  return usersFromServer.find(user => user.id === userId) || null;
}

export const TodoInfo = ({ todo }) => (
  <article
    className={cn('TodoInfo', {
      'TodoInfo--completed': todo.completed,
    })}
  >
    <h2 className="TodoInfo__title">{todo.title}</h2>

    {getUserById(todo.userId) && (
      <UserInfo user={getUserById(todo.userId)} key={todo.userId} />
    )}
  </article>
);

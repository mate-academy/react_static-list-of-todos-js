import cn from 'classnames';
import { UserInfo } from '../UserInfo';
import usersFromServer from '../../api/users.json';

export const TodoInfo = ({ todo }) => (
  <article
    className={cn('TodoInfo', {
      'TodoInfo--completed': todo.completed === true,
    })}
  >
    <h2 className="TodoInfo__title">{`${todo.title}`}</h2>
    <UserInfo user={usersFromServer.find(user => user.id === todo.userId)} />
  </article>
);

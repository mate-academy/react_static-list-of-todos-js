import classNames from 'classnames';
import { UserInfo } from '../UserInfo/UserInfo';
import usersFromServer from '../../api/users.json';

export const TodoInfo = ({ todo }) => (
  <article
    className={classNames('TodoInfo', {
      'TodoInfo--completed': todo.completed === true,
    })}
  >
    <h2 className="TodoInfo__title">{todo.title}</h2>
    <UserInfo user={usersFromServer.find(user => todo.userId === user.id)} />
  </article>
);

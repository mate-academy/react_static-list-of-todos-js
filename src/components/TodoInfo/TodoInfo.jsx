import classNames from 'classnames';
// import usersFromServer from '../../api/users.json';
import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => (
  <article
    className={classNames('TodoInfo', {
      'TodoInfo--completed': todo.completed,
    })}
  >
    <h2 className="TodoInfo__title">{todo.title}</h2>

    <UserInfo user={todo.user} />
  </article>
);

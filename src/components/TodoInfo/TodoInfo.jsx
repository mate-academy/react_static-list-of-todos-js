// Add the required props
import classNames from 'classnames';
import { UserInfo } from '../UserInfo/UserInfo';

export const TodoInfo = ({ todo }) => (
  <article
    className={classNames('TodoInfo', {
      'TodoInfo--completed': todo.completed,
    })}
  >
    <h2
      className={classNames('TodoInfo__title', {
        'TodoInfo__title--completed': todo.completed,
      })}
    >
      {todo.title}
    </h2>
    {todo.user && <UserInfo user={todo.user} />}
  </article>
);

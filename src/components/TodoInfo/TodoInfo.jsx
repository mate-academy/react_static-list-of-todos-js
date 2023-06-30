import classNames from 'classnames';
import { UserInfo } from '../UserInfo/UserInfo';

export const TodoInfo = ({ todo }) => (
  <article className={classNames('TodoInfo',
    { 'TodoInfo--completed': todo.completed })}
  >
    <h2 className={classNames('TodoInfo__title')}>
      <p>
        {
          `${todo.title}`
        }
      </p>

    </h2>
    <UserInfo user={todo.user} />
  </article>
);

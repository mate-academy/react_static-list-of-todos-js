import classNames from 'classnames';
import { UserInfo } from '../UserInfo/UserInfo';

export const TodoInfo = ({ todo }) => (
  <div
    className={classNames('TodoInfo', {
      'TodoInfo--completed': todo.completed,
    })}
    data-cy="Todo"
  >
    <p className="TodoInfo__title" data-cy="TodoTitle">
      {todo.title}
    </p>

    {todo.user && <UserInfo user={todo.user} />}
  </div>
);

// Add the required props
import classNames from 'classnames';

import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => {
  return (
    <article
      className={classNames('TodoInfo', {
        'TodoInfo--completed': todo.completed === true,
      })}
    >
      <h2 className="TodoInfo__title">{todo.title}</h2>

      {todo.user ? <UserInfo user={todo.user} /> : null}
    </article>
  );
};

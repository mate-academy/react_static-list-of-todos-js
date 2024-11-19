import classNames from 'classnames';

import './TodoInfo.scss';
import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo = {} }) => {
  return (
    <article
      className={classNames('TodoInfo', {
        'TodoInfo--completed': todo.completed,
      })}
    >
      <h2 className="TodoInfo__title">{todo.title || 'Untitled Todo'}</h2>
      {todo.user && <UserInfo user={todo.user} />}
    </article>
  );
};

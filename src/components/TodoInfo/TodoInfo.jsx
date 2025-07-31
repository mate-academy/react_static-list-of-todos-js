import cn from 'classnames';
import { UserInfo } from '../UserInfo/UserInfo';

import './TodoInfo.scss';

export const TodoInfo = ({ todo }) => {
  const todoClassNames = cn('TodoInfo', {
    'TodoInfo--completed': todo.completed,
  });

  return (
    <article className={todoClassNames}>
      <h2 className="TodoInfo__title">{todo.title}</h2>

      {todo.user && <UserInfo user={todo.user} />}
    </article>
  );
};

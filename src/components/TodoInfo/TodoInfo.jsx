import cn from 'classnames';
import './TodoInfo.scss';

import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => {
  const {
    userId,
    completed,
    title,
    user,
  } = todo;

  return (
    <article className={cn('TodoInfo', { 'TodoInfo--completed': completed })}>
      <h2 className="TodoInfo__title">
        {title}
      </h2>

      {user && (
        <UserInfo
          key={userId}
          user={user}
        />
      )}
    </article>
  );
};

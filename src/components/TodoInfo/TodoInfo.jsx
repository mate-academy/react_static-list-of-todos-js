import cn from 'classnames';
import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => {
  const {
    user,
    title,
    completed,
  } = todo;

  return (
    <article className={cn('TodoInfo', {
      ' TodoInfo--completed': completed,
    })}
    >
      <h2 className="TodoInfo__title">
        {title}
      </h2>

      {user !== null && <UserInfo user={user} />}
    </article>
  );
};

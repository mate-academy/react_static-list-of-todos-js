import cn from 'classnames';
import { UserInfo } from '../UserInfo/UserInfo';

// Add the required props
export const TodoInfo = ({ todo }) => {
  const { title, user, completed } = todo;

  return (
    <article
      className={cn('TodoInfo', {
        'TodoInfo--completed': completed,
      })}
    >
      <h2 className="TodoInfo__title">{title}</h2>
      {user && <UserInfo user={user} />}
    </article>
  );
};

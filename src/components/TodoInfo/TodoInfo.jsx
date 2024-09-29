// Add the required props
import cn from 'classnames';
import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo: { id, completed, title, user } }) => {
  return (
    <article
      key={id}
      className={cn('TodoInfo', {
        'TodoInfo--completed': completed,
      })}
    >
      <h2 className="TodoInfo__title">{title}</h2>

      {user && <UserInfo user={user} />}
    </article>
  );
};

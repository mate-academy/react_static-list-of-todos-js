import cn from 'classnames';
import { UserInfo } from '../UserInfo/UserInfo';

export const TodoInfo = ({ todo }) => {
  const { complete, title, user } = todo;

  return (
    <article
      className={cn('TodoInfo', {
        'TodoInfo--complete': complete,
      })}
    >
      <h2 className="TodoInfo__title">{title}</h2>

      <UserInfo user={user} />
    </article>
  );
};

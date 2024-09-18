import cn from 'classnames';
import { UserInfo } from '../UserInfo/UserInfo';

export const TodoInfo = ({ todo }) => {
  const { title, completed, user } = todo;

  return (
    <article className={cn('TodoInfo', { 'TodoInfo--completed': completed })}>
      <h2 className="TodoInfo__title">{title}</h2>

      {user !== undefined && <UserInfo user={user} />}
    </article>
  );
};

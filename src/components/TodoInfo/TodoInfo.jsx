import './TodoInfo.scss';
import cn from 'classnames';
import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => {
  const { title, completed, user } = todo;

  return (
    <article
      className={cn('TodoInfo', { 'TodoInfo--completed': completed === true })}
    >
      <h2 className="TodoInfo__title">{title}</h2>
      {user && <UserInfo user={user} key={user.userId} /> }
    </article>
  );
};

import cn from 'classnames';
import './TodoInfo.scss';
import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => {
  const { user, title, completed } = todo;

  return (
    <article className={cn('TodoInfo', { 'TodoInfo--completed': completed })}>
      <h2 className="TodoInfo__title">{title}</h2>
      <UserInfo user={user} key={user.id} />
    </article>
  );
};

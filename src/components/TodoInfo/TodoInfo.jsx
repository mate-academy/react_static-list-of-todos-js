import cn from 'classnames';
import { UserInfo } from '../UserInfo/UserInfo';

export const TodoInfo = props => {
  const {
    todo: { title, completed, userId, user },
  } = props;

  return (
    <article className={cn('TodoInfo', { 'TodoInfo--completed': completed })}>
      <h2 className="TodoInfo__title">{title}</h2>

      <UserInfo key={userId} user={user} />
    </article>
  );
};

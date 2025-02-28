import cn from 'classnames';
import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => {
  let userLabel = null;

  if (todo.user) {
    userLabel = <UserInfo user={todo.user} />;
  }

  return (
    <article
      className={cn('TodoInfo', { 'TodoInfo--completed': todo.completed })}
    >
      <h2 className="TodoInfo__title">{todo.title}</h2>
      {userLabel}
    </article>
  );
};

import cn from 'classnames';
import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => {
  const { user, completed, title } = todo;

  return (
    <article
      className={cn('TodoInfo', { 'TodoInfo--completed': completed })}
    >
      <h2 className="TodoInfo__title">
        {title}
      </h2>

      {todo.user && (
        <UserInfo user={user} />
      )}
    </article>
  );
};

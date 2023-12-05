import cn from 'classnames';
import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => {
  const todoClass = cn('TodoInfo',
    { 'TodoInfo--completed': todo.completed === true });

  return (
    <article className={todoClass}>
      <h2 className="TodoInfo__title">{todo.title}</h2>
      {todo.user && (
        <UserInfo user={todo.user} />
      )}
    </article>
  );
};

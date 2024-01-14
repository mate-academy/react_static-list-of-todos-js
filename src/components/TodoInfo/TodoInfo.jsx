import cn from 'classnames';
import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => {
  const { completed } = todo;

  return (
    <article className={cn('TodoInfo', {
      'TodoInfo--completed': completed === true,
    })}
    >
      <h2 className="TodoInfo__title">{todo.title}</h2>
      <UserInfo user={todo.user} />
    </article>
  );
};

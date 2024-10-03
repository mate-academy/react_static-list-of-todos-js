// Add the required props
import cn from 'classnames';
import { UserInfo } from '../UserInfo/UserInfo';

export const TodoInfo = ({ todo }) => {
  const { completed, title } = todo;

  return (
    <article
      className={cn('TodoInfo', {
        'TodoInfo--completed': completed,
      })}
    >
      <h2 className="TodoInfo__title">{title}</h2>

      {todo.user && <UserInfo user={todo.user} />}
    </article>
  );
};

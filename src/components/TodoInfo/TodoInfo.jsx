import cn from 'classnames';
import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo, user }) => (
  <article className={cn(
    'TodoInfo', {
      'TodoInfo--completed': todo.completed === true,
    },
  )}
  >
    <h2 className="TodoInfo__title">{todo.title}</h2>

    <UserInfo user={todo.user} />
  </article>
);

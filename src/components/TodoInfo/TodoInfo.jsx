import { UserInfo } from '../UserInfo';
import cn from 'classnames';

export function TodoInfo({ todo }) {
  return (
    <article
      className={cn('TodoInfo', {
        'TodoInfo--completed': todo.completed,
      })
      }
    >
      <h2 className="TodoInfo__title">{todo.title}</h2>
      <UserInfo user={todo.user} />
    </article>
  );
}

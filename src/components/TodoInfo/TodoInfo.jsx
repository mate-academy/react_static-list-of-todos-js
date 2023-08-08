import cn from 'classnames';
import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => (
  <article
    className={cn('TodoInfo', {
      'TodoInfo--completed': todo.completed === true,
    })}
  >
    <h2 className="TodoInfo__title">{todo.title}</h2>

    <UserInfo todo={todo} />
  </article>
);

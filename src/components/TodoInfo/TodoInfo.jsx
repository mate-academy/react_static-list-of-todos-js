import cn from 'classnames';
import { UserInfo } from '../UserInfo';
import './TodoInfo.scss';

export const TodoInfo = ({ todo }) => (
  <article className={cn('TodoInfo', {
    'TodoInfo--completed': todo.completed === true,
  })}
  >
    <h2 className="TodoInfo__title">
      {todo.title}
    </h2>

    {todo.user !== null && (<UserInfo user={todo.user} />)}
  </article>

);

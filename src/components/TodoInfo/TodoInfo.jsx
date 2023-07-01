import cn from 'classnames';
import { UserInfo } from '../UserInfo';
import './TodoInfo.scss';

export const TodoInfo = ({ todo }) => (
  // eslint-disable-next-line
  <article className={cn('TodoInfo', { 'TodoInfo--completed': todo.completed })}>
    <h2 className="TodoInfo__title">{todo.title}</h2>

    {todo.user && (<UserInfo user={todo.user} />)}
  </article>
);

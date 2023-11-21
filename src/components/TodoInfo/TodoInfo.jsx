// Add the required props
import cn from 'classnames';
// import { userInfo } from 'os';
import { UserInfo } from '../UserInfo/UserInfo';
import './TodoInfo.scss';

export const TodoInfo = ({ todo }) => (
  <article className={cn('TodoInfo', {
    'TodoInfo--completed': todo.completed,
  })}
  >
    <h2 className="TodoInfo__title">{todo.title}</h2>
    <UserInfo user={todo.user} />
  </article>
);

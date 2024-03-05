import cn from 'classnames';
import { UserInfo } from '../UserInfo/UserInfo';
import users from '../../api/users.json';

export const TodoInfo = ({ todo }) => (
  <article
    className={cn('TodoInfo', { 'TodoInfo--completed': todo.completed })}
  >
    <h2 className="TodoInfo__title">{todo.title}</h2>
    <UserInfo user={users[todo.userId]} />
  </article>
);

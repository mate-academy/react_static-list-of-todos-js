import cn from 'classnames';
import { UserInfo } from '../UserInfo';
import './TodoInfo.scss';

export const TodoInfo = ({ todo: { completed, title, user } }) => (
  <article className={cn('TodoInfo', {
    'TodoInfo--completed': completed === true,
  })}
  >
    <h2 className="TodoInfo__title">{title}</h2>

    {user && <UserInfo user={user} />}
  </article>
);

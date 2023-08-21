import './TodoInfo.scss';
import cn from 'classnames';
import { UserInfo } from '../UserInfo';

export const TodoInfo = ({
  todo: { user, title, completed },
}) => (
  <li
    className={cn('TodoInfo', {
      'TodoInfo--completed': completed,
    })}
  >
    <h2 className="TodoInfo__title">{title}</h2>

    <UserInfo user={user} />
  </li>
);

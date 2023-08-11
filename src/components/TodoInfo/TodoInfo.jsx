import cn from 'classnames';
import { UserInfo } from '../UserInfo';

export const TodoInfo = ({
  todo: {
    title,
    completed,
    user,
  },
}) => (
  <li className={cn('TodoInfo', {
    'TodoInfo--completed': completed,
  })}
  >
    <h2 className="TodoInfo__title">
      {title}
    </h2>

    <UserInfo
      user={user}
    />

  </li>
);

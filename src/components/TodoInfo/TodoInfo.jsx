// Add the required props
import classNames from 'classnames';
import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo: { completed, title, user } }) => {
  const isCompleted
    = classNames('TodoInfo', { 'TodoInfo--completed': completed });

  return (
    <li className={isCompleted}>
      <h2 className="TodoInfo__title">{title}</h2>

      <UserInfo user={user} />
    </li>
  );
};

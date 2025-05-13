import classNames from 'classnames';
import './TodoInfo.scss';
import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo: { completed, title, user } }) => {
  const todoCn = classNames('TodoInfo', {
    'TodoInfo--completed': completed,
  });

  return (
    <article className={todoCn}>
      <h2 className="TodoInfo__title">{title}</h2>

      <UserInfo user={user} />
    </article>
  );
};

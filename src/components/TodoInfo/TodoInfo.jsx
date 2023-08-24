import cn from 'classnames';
import { UserInfo } from '../UserInfo';
import './TodoInfo.scss';

export const TodoInfo = ({ todo }) => {
  const {
    title,
    completed,
    user,
  } = todo;

  const todoClasses = cn('TodoInfo', {
    'TodoInfo--completed': completed,
  });

  return (
    <article className={todoClasses}>
      <h2 className="TodoInfo__title">{title}</h2>

      {Boolean(user) && (
        <UserInfo user={user} />
      )}
    </article>
  );
};

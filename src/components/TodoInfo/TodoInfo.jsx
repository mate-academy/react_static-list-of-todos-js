// Add the required props
import classNames from 'classnames';
import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => {
  const {
    completed,
    title,
    user,
  } = todo;

  const todoClasses = classNames('TodoInfo', {
    'TodoInfo--completed': completed,
  });

  return (
    <article className={todoClasses}>
      <h2 className="TodoInfo__title">{title}</h2>

      {user && (
        <UserInfo user={user} />
      )}
    </article>
  );
};

import classNames from 'classnames';
import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => {
  const { user } = todo;

  const todoClasses = classNames('TodoInfo', {
    'TodoInfo--completed': todo.completed,
  });

  return (
    <article className={todoClasses}>
      <h2 className="TodoInfo__title">{todo.title}</h2>

      {user && (
        <UserInfo user={user} />
      )}
    </article>
  );
};

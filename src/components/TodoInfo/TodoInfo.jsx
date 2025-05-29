// Add the required props
import classNames from 'classnames';
import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => {
  const todoClass = classNames('TodoInfo', {
    'TodoInfo--completed': todo.completed,
  });

  return (
    <article className={todoClass}>
      <h2 className="TodoInfo__title">{todo.title}</h2>

      {todo.user && <UserInfo user={todo.user} />}
    </article>
  );
};

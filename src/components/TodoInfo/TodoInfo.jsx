// Add the required props
import classNames from 'classnames';
import { UserInfo } from '../UserInfo/UserInfo';

export const TodoInfo = ({ todo }) => {
  const { completed, title } = todo;

  return (
    <article
      className={classNames('TodoInfo', { 'TodoInfo--completed': completed })}
    >
      <h2 className="TodoInfo__title">{title}</h2>

      {todo.user && <UserInfo user={todo.user} />}
    </article>
  );
};

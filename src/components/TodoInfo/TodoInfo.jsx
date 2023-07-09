import classNames from 'classnames';
import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => {
  const { title, completed } = todo;

  const articleClassName = classNames('TodoInfo', {
    'TodoInfo--completed': completed,
  });

  return (
    <article className={articleClassName}>
      <h2 className="TodoInfo__title">{title}</h2>

      {todo.user && (
        <UserInfo user={todo.user} />
      )}
    </article>
  );
};

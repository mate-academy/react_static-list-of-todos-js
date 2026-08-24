import cn from 'classnames';
import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => {
  // eslint-disable-next-line prettier/prettier
  const completed = (todo.completed === true)
    ? 'TodoInfo--completed'
    : null;

  return (
    <article className={cn('TodoInfo', completed)}>
      <h2 className="TodoInfo__title">{todo.title}</h2>

      {todo.user && <UserInfo user={todo.user} />}
    </article>
  );
};

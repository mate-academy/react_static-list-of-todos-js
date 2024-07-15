import cn from 'classnames';
import { UserInfo } from '../UserInfo/UserInfo';

export const TodoInfo = ({ todo }) => {
  const articleClass = cn('TodoInfo', {
    'TodoInfo--completed': todo.completed,
  });

  return (
    <article className={articleClass}>
      <h2 className="TodoInfo__title">{todo.title}</h2>
      <UserInfo user={todo.user} />
    </article>
  );
};

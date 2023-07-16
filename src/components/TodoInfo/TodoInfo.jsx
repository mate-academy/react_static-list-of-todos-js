import cn from 'classnames';
import { UserInfo } from '../UserInfo/UserInfo';

export const TodoInfo = ({ todo }) => {
  const todoInfoClass = cn({ 'TodoInfo--completed': todo.completed });

  return (
    <article className={`TodoInfo ${todoInfoClass}`}>
      <h2 className="TodoInfo__title">
        {todo.title}
      </h2>

      {todo.user ? <UserInfo user={todo.user} /> : null}
    </article>
  );
};

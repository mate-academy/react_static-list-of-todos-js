import cn from 'classnames';
import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => {
  const todos = { ...todo };

  return (
    <article className={cn('TodoInfo', {
      'TodoInfo--completed': todos.completed === true,
    })}
    >
      <h2 className="TodoInfo__title">
        {todos.title}
      </h2>

      <UserInfo user={todos.user} />
    </article>
  );
};

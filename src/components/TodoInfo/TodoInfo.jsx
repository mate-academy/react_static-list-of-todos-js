// Add the required props
import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => {
  const hasUser = Boolean(todo.user);

  return (
    <article
      className={`TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`}
    >
      <h2 className="TodoInfo__title">{todo.title}</h2>

      {hasUser && <UserInfo user={todo.user} />}
    </article>
  );
};

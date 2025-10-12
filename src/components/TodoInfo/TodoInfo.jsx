// Add the required props
import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => {
  const articleClass = `TodoInfo${todo.completed ? ' TodoInfo--completed' : ''}`;

  return (
    <article className={articleClass}>
      <h2 className="TodoInfo__title">{todo.title}</h2>

      {todo.user && <UserInfo user={todo.user} />}
    </article>
  );
};

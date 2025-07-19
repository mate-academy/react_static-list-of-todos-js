// Add the required props
import { UserInfo } from '../UserInfo/UserInfo';

export const TodoInfo = ({ todo }) => {
  const articleClasses = `TodoInfo${todo.completed ? ' TodoInfo--completed' : ''}`;

  return (
    <article className={articleClasses}>
      <h2 className="TodoInfo__title">{todo.title}</h2>
      {todo.user && <UserInfo user={todo.user} />}
    </article>
  );
};

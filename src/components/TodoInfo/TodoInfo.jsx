// Add the required props
import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => {
  const todoClassName = todo.completed
    ? 'TodoInfo TodoInfo--completed'
    : 'TodoInfo';

  return (
    <article className={todoClassName}>
      <h2 className="TodoInfo__title">{todo.title}</h2>
      <UserInfo user={todo.user} />
    </article>
  );
};

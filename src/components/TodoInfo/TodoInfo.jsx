// Add the required props
import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => {
  let isCompleted = 'TodoInfo';

  if (todo.completed) {
    isCompleted = 'TodoInfo TodoInfo--completed';
  }

  return (
    <article className={isCompleted}>
      <h2 className="TodoInfo__title">{todo.title}</h2>
      <UserInfo key={todo.user.id} user={todo.user} />
    </article>
  );
};

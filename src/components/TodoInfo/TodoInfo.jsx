// Add the required props
import { UserInfo } from '../UserInfo/UserInfo';

export const TodoInfo = ({ todo }) => {
  let classCompleted = '';

  if (todo.completed) {
    classCompleted = 'TodoInfo--completed';
  }

  return (
    <article className={`TodoInfo ${classCompleted}`}>
      <h2 className="TodoInfo__title">{todo.title}</h2>

      <UserInfo user={todo.user} />
    </article>
  );
};

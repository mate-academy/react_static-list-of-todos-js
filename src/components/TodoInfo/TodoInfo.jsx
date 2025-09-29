// Add the required props
import { UserInfo } from '../UserInfo/UserInfo';

export const TodoInfo = ({ todo }) => {
  let com = '';

  if (todo.completed === true) {
    com = ' TodoInfo--completed';
  }

  return (
    <article className={`TodoInfo${com}`}>
      <h2 className="TodoInfo__title">{todo.title}</h2>

      {todo.user && <UserInfo user={todo.user} />}
    </article>
  );
};

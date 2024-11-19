// Add the required props
import { UserInfo } from '../UserInfo/UserInfo';

export const TodoInfo = ({ todo }) =>
  todo.completed ? (
    <article className="TodoInfo TodoInfo--completed">
      <h2 className="TodoInfo__title">{todo.title}</h2>

      <UserInfo user={todo.user} />
    </article>
  ) : (
    <article className="TodoInfo">
      <h2 className="TodoInfo__title">{todo.title}</h2>
      <UserInfo user={todo.user} />
    </article>
  );

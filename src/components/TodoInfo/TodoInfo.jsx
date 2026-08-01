// Add the required props
// eslint-disable-next-line import/no-named-as-default, import/no-named-as-default-member
import { UserInfo } from '../UserInfo/UserInfo';

export const TodoInfo = ({ todo }) => (
  <article
    className={`TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`}
  >
    <h2 className="TodoInfo__title">{todo.title}</h2>
    {todo.user && <UserInfo user={todo.user} />}
  </article>
);

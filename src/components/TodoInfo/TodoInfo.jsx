// Add the required props
// eslint-disable-next-line import/named
import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => (
  // eslint-disable-next-line prettier/prettier
  <article className={`TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`}>
    <h2 className="TodoInfo__title">{todo.title}</h2>

    {todo.user && <UserInfo user={todo.user} />}
  </article>
);

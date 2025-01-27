// eslint-disable-next-line import/no-extraneous-dependencies
import { clsx } from 'clsx';
import { UserInfo } from '../UserInfo/UserInfo';
// Add the required props
export const TodoInfo = ({ todo }) => (
  <article
    className={clsx('TodoInfo', todo.completed && 'TodoInfo--completed')}
  >
    <h2 className="TodoInfo__title">{todo.title}</h2>
    {todo.user && <UserInfo user={todo.user} />}
  </article>
);

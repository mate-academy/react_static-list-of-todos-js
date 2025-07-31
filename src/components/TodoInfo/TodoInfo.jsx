import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => (
  <article
    className={`TodoInfo TodoInfo${todo.completed ? `--completed` : ``}`}
  >
    {todo.userId}
    <h2 className="TodoInfo__title">{todo.title}</h2>
    {todo.user && <UserInfo user={todo.user} />}
  </article>
);

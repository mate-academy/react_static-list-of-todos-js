import { UserInfo } from '../UserInfo/UserInfo';

export const TodoInfo = ({ todo }) => (
  <article
    className={todo.completed ? 'TodoInfo TodoInfo--completed' : 'TodoInfo'}
    key={todo.id}
  >
    <h2 className="TodoInfo__title">{todo.title}</h2>
    {todo.user !== null ? <UserInfo user={todo.user} /> : undefined}
  </article>
);

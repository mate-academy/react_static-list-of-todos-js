import { UserInfo } from '../UserInfo/UserInfo';

export const TodoInfo = ({ todo }) => (
  <article
    className={
      todo.completed === false ? 'TodoInfo' : 'TodoInfo TodoInfo--completed'
    }
  >
    {todo.user && <UserInfo user={todo.user} />}
    <h2 className="TodoInfo__title">{todo.title}</h2>
  </article>
);

import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => (
  <article className={`TodoInfo ${todo.complete && 'TodoInfo--complete'}`}>
    <h2 className="TodoInfo__title">{todo.title}</h2>

    <UserInfo user={todo.user} />
  </article>
);

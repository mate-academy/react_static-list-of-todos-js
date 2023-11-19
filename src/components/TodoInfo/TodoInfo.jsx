import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => (
  <article className={`TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`}>
    <h2 className="TodoInfo__title">{todo.title}</h2>

    {todo.user !== null && <UserInfo user={todo.user} />}
  </article>
);

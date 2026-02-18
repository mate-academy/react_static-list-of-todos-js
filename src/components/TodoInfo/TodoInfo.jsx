import { UserInfo } from '../UserInfo';

// Add the required props
export const TodoInfo = ({ todo }) => (
  <article
    className={`TodoInfo ${todo.completed === true ? 'TodoInfo--completed' : null}`}
  >
    {todo.user ? <UserInfo user={todo.user} /> : null}
    <h2 className="TodoInfo__title">{todo.title}</h2>
  </article>
);

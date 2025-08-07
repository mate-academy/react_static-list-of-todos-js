import { UserInfo } from '../UserInfo/index';

// Add the required props
export const TodoInfo = ({ todo }) => (
  <article
    className={`TodoInfo${todo.completed ? ' TodoInfo--completed' : ''}`}
  >
    <h2 className="TodoInfo__title">{todo.title}</h2>

    <UserInfo user={todo.user} key={todo.user.id} />
  </article>
);

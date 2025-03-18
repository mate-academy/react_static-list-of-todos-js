import { UserInfo } from '../UserInfo';

// Add the required props
export const TodoInfo = ({ todo }) => (
  <article
    className={`TodoInfo TodoInfo--${todo.completed ? 'completed' : ''}`}
    key={todo.id}
  >
    <h2 className="TodoInfo__title">{todo.title}</h2>

    {todo.user && <UserInfo user={todo.user} />}
  </article>
);

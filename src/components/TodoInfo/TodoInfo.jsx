import { UserInfo } from '../UserInfo/UserInfo';

// Accept a single todo as a prop
export const TodoInfo = ({ todo }) => (
  <article
    className={`TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`}
  >
    <h2 className="TodoInfo__title">{todo.title}</h2>

    {/* Only render UserInfo if todo.user exists */}
    {todo.user && <UserInfo user={todo.user} />}
  </article>
);

import { UserInfo } from "../UserInfo/UserInfo";

// Add the required props
export const TodoInfo = ({ todo }) => (
  <article
    className={`TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`}
  >
    <h2 className="TodoInfo__title">{todo.title}</h2>
    {todo.user && <UserInfo key={todo.user.id} user={todo.user} />}
  </article>
);

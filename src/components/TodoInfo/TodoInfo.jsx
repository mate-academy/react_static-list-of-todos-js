import { UserInfo } from '../UserInfo/UserInfo';

// Add the required props
export const TodoInfo = ({ todo }) => (
  <article
    className={`TodoInfo ${
      todo.completed === true ? 'TodoInfo--completed' : null
    }`}
  >
    <h2 className="TodoInfo__title">{todo.title}</h2>

    <UserInfo user={todo} />
  </article>
);

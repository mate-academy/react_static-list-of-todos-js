// Add the required props
import { UserInfo } from '../UserInfo/UserInfo';

export const TodoInfo = ({ todo }) => (
  <article
    className={`TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`}
    key={todo.id}
  >
    <h2 className="TodoInfo__title">{todo.title}</h2>

    {todo.userId && <UserInfo user={todo.user} />}
  </article>
);

export default TodoInfo;

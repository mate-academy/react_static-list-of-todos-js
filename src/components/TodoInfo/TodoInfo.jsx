// Add the required props
import { UserInfo } from '../UserInfo/UserInfo';

export const TodoInfo = ({ todo }) => {
  return (
    <article
      className={`TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`}
    >
      <h2 className="TodoInfo__title">{todo.title}</h2>

      <UserInfo user={todo.user} key={todo.user.id} />
    </article>
  );
};

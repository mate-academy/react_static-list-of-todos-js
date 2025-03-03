// Add the required props
import { UserInfo } from '../UserInfo/UserInfo';

export const TodoInfo = ({ todo }) => {
  const { user } = todo;

  return (
    <article
      className={`TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`}
    >
      <div className="TodoInfo__item">
        <h2 className="TodoInfo__title">{todo.title}</h2>
        {user && <UserInfo user={user} />}
      </div>
    </article>
  );
};

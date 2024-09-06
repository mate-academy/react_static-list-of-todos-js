import { UserInfo } from '../UserInfo/UserInfo';
import './TodoInfo.scss';

export const TodoInfo = ({ todo }) => {
  const { user } = todo;

  return (
    <article
      className={`TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`}
    >
      <h2 className="TodoInfo__title">{todo.title}</h2>
      {user ? <UserInfo user={user} /> : null}
    </article>
  );
};

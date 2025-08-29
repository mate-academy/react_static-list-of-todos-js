import { UserInfo } from '../UserInfo';
import './TodoInfo.scss';

export const TodoInfo = ({ todo }) => {
  const isCompleted = todo.completed && 'TodoInfo--completed';
  const userExisted = todo.user ? <UserInfo user={todo.user} /> : '';

  return (
    <article className={`TodoInfo ${isCompleted}`}>
      <h2 className="TodoInfo__title">{todo.title}</h2>
      {userExisted}
    </article>
  );
};

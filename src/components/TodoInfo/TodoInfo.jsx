import { UserInfo } from '../UserInfo';
import './TodoInfo.scss';

export const TodoInfo = ({ todo }) => {
  const isCompleted = todo.completed ? 'TodoInfo--completed' : '';

  return (
    <article className={`TodoInfo ${isCompleted}`}>
      <h2 className="TodoInfo__title">{todo.title}</h2>

      <UserInfo user={todo.user} />
    </article>
  );
};

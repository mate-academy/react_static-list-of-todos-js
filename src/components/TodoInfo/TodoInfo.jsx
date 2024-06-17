import './TodoInfo.scss';
import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => {
  const todoCompleted = `TodoInfo + ${todo.completed && ' TodoInfo--completed'}`;

  return (
    <article className={todoCompleted}>
      <h2 className="TodoInfo__title">{todo.title}</h2>

      <UserInfo user={todo.user} />
    </article>
  );
};

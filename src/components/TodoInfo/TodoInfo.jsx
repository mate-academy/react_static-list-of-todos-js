import { UserInfo } from '../UserInfo';
import './TodoInfo.scss';

export const TodoInfo = ({ todo }) => {
  const cardClassName = `TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`.trim();

  return (
    <article className={cardClassName}>
      <h2 className="TodoInfo__title">{todo.title}</h2>

      {todo.user && <UserInfo user={todo.user} />}
    </article>
  );
};
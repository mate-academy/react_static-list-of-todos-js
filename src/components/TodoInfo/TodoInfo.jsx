import './TodoInfo.scss';
import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => {
  const completedClasses = todo.completed ? 'TodoInfo--completed' : '';

  return (
    <article className={`TodoInfo ${completedClasses}`}>
      <h2 className="TodoInfo__title">{todo.title}</h2>

      {todo.user && <UserInfo user={todo.user} />}
    </article>
  );
};

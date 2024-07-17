import { UserInfo } from '../UserInfo';
import './TodoInfo.scss';

// Add the required props
export const TodoInfo = ({ todo }) => {
  const todoCompletedClass = todo.completed ? 'TodoInfo--completed' : '';

  return (
    <article className={`TodoInfo ${todoCompletedClass}`}>
      <h2 className="TodoInfo__title">{todo.title}</h2>
      <UserInfo user={todo.user} />
    </article>
  );
};

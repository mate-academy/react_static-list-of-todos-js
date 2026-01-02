import './TodoInfo.scss';
import { UserInfo } from '../UserInfo';

// Add the required props
export const TodoInfo = ({ todo }) => {
  const comletedClass = todo.completed ? 'TodoInfo--completed' : '';

  return (
    <article className={`TodoInfo ${comletedClass}`}>
      <h2 className="TodoInfo__title">{todo.title}</h2>
      <UserInfo user={todo.user} />
    </article>
  );
};

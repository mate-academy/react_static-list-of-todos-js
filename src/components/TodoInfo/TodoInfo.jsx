import { UserInfo } from '../UserInfo';

// Add the required props
export const TodoInfo = ({ todo }) => {
  const isCompleted = todo.completed;

  return (
    <article className={`TodoInfo${isCompleted ? ' TodoInfo--completed' : ''}`}>
      <h2 className="TodoInfo__title">{todo.title}</h2>

      <UserInfo user={todo.user} />
    </article>
  );
};

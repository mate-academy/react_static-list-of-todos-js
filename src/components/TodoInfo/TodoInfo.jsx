import { UserInfo } from '../UserInfo';

// Add the required props
export const TodoInfo = ({ todo }) => {
  const {
    title,
    completed,
  } = todo;

  return (
    <article className={`${completed
      ? 'TodoInfo TodoInfo--completed'
      : 'TodoInfo'}`}
    >
      <h2 className="TodoInfo__title">
        {title}
      </h2>

      {todo.user && <UserInfo user={todo.user} />}
    </article>
  );
};
